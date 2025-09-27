import React from "react";
import type { SceneState } from "../models/Scene";

interface ControlsPanelProps {
  scene: SceneState;
  onColorChange: (color: string) => void;
  onBackgroundChange: (color: string) => void;
  onTransparentChange: (transparent: boolean) => void;
  onTextureUpload: (texture?: string) => void;
  onModelChange: (model: string) => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({
  scene,
  onColorChange,
  onBackgroundChange,
  onTransparentChange,
  onTextureUpload,
  onModelChange
}) => {
  const handleTextureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file)
    {
      onTextureUpload(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onTextureUpload(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="controlspanel">
      <span className="region">
        <label className="header">
          Model:
          <select onChange={(e) => onModelChange(e.target.value)}>
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
          <input type="file" accept="image/*" onChange={handleTextureUpload} />
        </label>
      </span>
    </div>
  );
};

export default ControlsPanel;
