import React, { useState } from "react";
import type { SceneState } from "../models/Scene";
import { deserializeScene, serializeScene } from "../services/SceneService";
import { uploadScene } from "../services/ApiService";

interface ToolbarProps {
  scene: SceneState;
  uvMapDataURL: string;
  onLoadScene: (scene: SceneState) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ scene, onLoadScene, uvMapDataURL }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [description, setDescription] = useState(scene.description || "");
  const [includeTexture, setIncludeTexture] = useState(false);

  const handleImportScene = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const importedScene = deserializeScene(reader.result as string);
        onLoadScene(importedScene);
      } catch (e) {
        console.error("Invalid scene JSON", e);
      }
    };
    reader.readAsText(file);
  };

  const handleExportScene = () => {
    const exportData = serializeScene({
      ...scene,
      description,
      texture: includeTexture ? scene.texture : undefined
    });
    const blob = new Blob([exportData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "scene.json";
    link.click();
  };

  const handleUploadScene = () => {
    uploadScene({ ...scene, description });
  };

  return (
    <div>
      <div className="region">
        <div className="header">Customization description:</div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your customization"
        />
      </div>
      <div className="region">
        <div className="header">Import customization from file:</div>
        <input type="file" accept="application/json" onChange={handleImportScene} />
      </div>
      <div className="region">
        <div className="header">Import customization from text:</div>
        <div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Paste scene JSON here"
          />
        </div>
        <button onClick={() => onLoadScene(deserializeScene(jsonInput))}>
          Load Scene
        </button>
      </div>
      <div className="region">
        <div className="header">Export customization to file:</div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeTexture}
              onChange={(e) => setIncludeTexture(e.target.checked)}
            />
            Include Texture in Export
          </label>
        </div>
        <button onClick={handleExportScene}>Export Scene</button>
      </div>
      <div className="region">
        <div className="header">Upload customization to endpoint:</div>
        <button onClick={handleUploadScene}>Upload Scene</button>
      </div>
      <div className="region">
        <div className="header">Download UV map template:</div>
        <button
          onClick={() => {
            if (uvMapDataURL) {
              const link = document.createElement("a");
              link.href = uvMapDataURL;
              link.download = "uvmap.png";
              link.click();
            }
          }}
        >
          Download UV Map
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
