import React, { useState } from "react";
import Viewer from "./Viewer";
import ControlsPanel from "./ControlsPanel";
import Toolbar from "./Toolbar";
import StatusBar from "./StatusBar";
import { validateSceneState } from "../utils/SceneUtils";
import type { SceneState } from "../models/SceneState";
import type { Status } from "../models/Status";

const App: React.FC = () => {
  const [scene, _setScene] = useState<SceneState>({
    description: "",
    color: "#ffffff",
    background: "#f0f0f0",
    transparent: false,
    model: "LDraw/3001.dat",
    texture: undefined
  });

  // Set scene with validation
  const setScene = (scene: SceneState):boolean => {
    try {
      validateSceneState(scene);
      _setScene(scene);
      setStatus({message: "Set scene successfully."})
      return true;
    } catch (e) {
      setStatus({message: e instanceof Error ? e.message : "Failed to set scene.", type: "error"});
      return false;
    }   
  };

  const [uvMapDataURL, setUvMapDataURL] = useState<string>("");
  const [status, setStatus] = useState<Status>({ message: "", type: "info" });

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "row", width: "100vw", height: "100vh" }}>
      <Toolbar
        scene={scene}
        uvMapDataURL={uvMapDataURL}
        onLoadScene={(loaded) => setScene(loaded)}
        onStatus={(status) => setStatus(status)}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ControlsPanel
          scene={scene}
          onDescriptionChange={(description) => setScene({...scene, description})}
          onColorChange={(color) => setScene({ ...scene, color })}
          onBackgroundChange={(background) => setScene({ ...scene, background })}
          onTransparentChange={(transparent) => setScene({ ...scene, transparent })}
          onTextureChange={(texture) => setScene({ ...scene, texture })}
          onModelChange={(modelPath) => setScene({ ...scene, model: modelPath })}
          onStatus={(status) => setStatus(status)}
        />
        <Viewer
          modelPath={scene.model}
          color={scene.color}
          background={scene.background}
          transparent={scene.transparent}
          texture={scene.texture}
          onMeshReady={(_, url) => setUvMapDataURL(url)}
          onStatus={(status) => setStatus(status)}
        />
        <StatusBar message={status.message} type={status.type} />
      </div>   
    </div>
  );
};

export default App;
