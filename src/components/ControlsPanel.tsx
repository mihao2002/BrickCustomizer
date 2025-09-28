import React from "react";
import type { SceneState } from "../models/SceneState";
import type { Status } from "../models/Status";

interface ControlsPanelProps {
  scene: SceneState;
  onDescriptionChange: (text: string) => void;
  onColorChange: (color: string) => void;
  onBackgroundChange: (color: string) => void;
  onTransparentChange: (transparent: boolean) => void;
  onTextureUpload: (texture?: string) => void;
  onModelChange: (model: string) => void;
  onStatus: (status:Status) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  scene,
  onDescriptionChange,
  onColorChange,
  onBackgroundChange,
  onTransparentChange,
  onTextureUpload,
  onModelChange,
  onStatus
}) => {
  const handleTextureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onTextureUpload(reader.result as string);
      onStatus({message:`Texture loaded from ${file.name}`})
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="controlspanel">
      <span className="region">
        <label className="header">
          Description:
          <input className="description"
            type="text"
            value={scene.description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Describe your customization"
          />
        </label>
      </span>
      <span className="region">
        <label className="header">
          Model:
          <select onChange={(e) => onModelChange(e.target.value)} value={scene.model}>
            <option value="LDraw/3001.dat">3001</option>
            <option value="LDraw/3062a.dat">3062a</option>
          </select>
        </label>
      </span>
      <span className="region">
        <label className="header">
          Color:
          <input
            type="color"
            value={scene.color}
            onChange={(e) => onColorChange(e.target.value)}
          />
        </label>
      </span>
      <span className="region">
        <label className="header">
          Background:
          <input
            type="color"
            value={scene.background}
            onChange={(e) => onBackgroundChange(e.target.value)}
          />
        </label>
      </span>
      <span className="region">
        <label className="header">
          Transparent:
          <input
            type="checkbox"
            checked={scene.transparent}
            onChange={(e) => onTransparentChange(e.target.checked)}
          />
        </label>
      </span>
      <span className="region">

        <label className="header">
          Texture:
          <input
            id="textureInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleTextureUpload(e);
            }}
          />
          <input
            type="checkbox"
            checked={!!scene.texture}
            onChange={(e) => {
              if (e.target.checked && !scene.texture) {
                document.getElementById("textureInput")?.click();
              } else if (!e.target.checked) {
                onTextureUpload(undefined);
              }
            }}
          />
        </label>
      </span>
    </div>
  );
};

export default ControlsPanel;
