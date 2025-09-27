// src/services/ApiService.ts
import type { SceneState } from "../models/Scene";

export function uploadScene(scene: SceneState) {
  fetch("http://example.com/your-endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(scene)
  })
    .then((res) => console.log("Scene uploaded", res))
    .catch((err) => console.error("Upload failed", err));
}
