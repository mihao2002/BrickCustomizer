import React, { useState } from "react";
import Viewer from "./Viewer";
import ControlsPanel from "./ControlsPanel";
import Toolbar from "./Toolbar";
import type { SceneState } from "../models/Scene";

const App: React.FC = () => {
  const [scene, setScene] = useState<SceneState>({
    color: "#ffffff",
    background: "#f0f0f0",
    transparent: false,
    model: "LDraw/3001.dat"
  });

  const [uvMapDataURL, setUvMapDataURL] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "100vh" }}>
      <Toolbar
        scene={scene}
        uvMapDataURL={uvMapDataURL}
        onLoadScene={(loaded) => setScene(loaded)}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
        <ControlsPanel
          scene={scene}
          onColorChange={(color) => setScene({ ...scene, color })}
          onBackgroundChange={(background) => setScene({ ...scene, background })}
          onTransparentChange={(transparent) => setScene({ ...scene, transparent })}
          onTextureUpload={(texture) => setScene({ ...scene, texture })}
          onModelChange={(modelPath) => setScene({ ...scene, model: modelPath })}
        />
        <Viewer
          modelPath={scene.model}
          color={scene.color}
          background={scene.background}
          transparent={scene.transparent}
          texture={scene.texture}
          onMeshReady={(_, url) => setUvMapDataURL(url)}
        />
      </div>   
    </div>

  );
};

export default App;
