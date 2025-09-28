import React, { useState } from "react";
import { deserializeScene, serializeScene } from "../utils/SceneUtils";
import { uploadScene } from "../services/ApiService";
import type { SceneState } from "../models/SceneState";
import type { Status } from "../models/Status";

interface ToolbarProps {
  scene: SceneState;
  uvMapDataURL: string;
  onLoadScene: (scene: SceneState) => boolean;
  onStatus: (status:Status) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ scene, uvMapDataURL, onLoadScene, onStatus }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [includeTexture, setIncludeTexture] = useState(false);

  const handleExportScene = () => {
    const exportData = serializeScene({
      ...scene,
      texture: includeTexture ? scene.texture : undefined
    });
    const blob = new Blob([exportData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "scene.json";
    link.click();

    URL.revokeObjectURL(link.href);
  };

  const handleImportSceneFromText = (jsonInput: string) =>
  {
    try {
      const scene = deserializeScene(jsonInput)
      if (onLoadScene(scene)) {
        onStatus({message: "Import scene successfully."});
      }      
    } catch (e) {
      onStatus({message: "Invalid scene JSON", type: "error"});
    }     
  }

  const handleImportScene = (file?: File) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      handleImportSceneFromText(reader.result as string);
    };
    reader.readAsText(file);
  };

  const handleUVMapDownload = () => {
    if (uvMapDataURL) {
      const link = document.createElement("a");
      link.href = uvMapDataURL;
      link.download = "uvmap.png";
      link.click();
    }    
  };

  const handleUploadScene = () => {
    uploadScene(scene, onStatus);
  };

  return (
    <div>
      <div className="region title">Brick Customizer</div>
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
        <div className="header">Import customization from text:</div>
        <div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Paste scene JSON here"
          />
        </div>
        <button onClick={() => handleImportSceneFromText(jsonInput)}>
          Load Scene
        </button>
      </div>
      <div className="region">
        <div className="header">Import customization from file:</div>
        <input
          type="file"
          id="importScene"
          accept="application/json"
          style={{ display: "none" }}
          onChange={(e) => {
            const input = e.target as HTMLInputElement;
            handleImportScene(input.files?.[0]);
            input.value = ""; // reset here so same file can be reselected
          }}
        />
        <button onClick={() => document.getElementById("importScene")?.click()}>
          Import Scene
        </button>
      </div>
      <div className="region">
        <div className="header">Upload customization to endpoint:</div>
        <button onClick={handleUploadScene}>Upload Scene</button>
      </div>
      <div className="region">
        <div className="header">Download UV map template:</div>
        <button onClick={handleUVMapDownload}>Download UV Map</button>
      </div>
    </div>
  );
};

export default Toolbar;
