import type { SceneState } from "../models/SceneState";
import type { Status } from "../models/Status";

export function uploadScene(
  scene: SceneState,
  setStatus: (status: Status) => void
) {
  fetch("http://example.com/your-endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(scene),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      setStatus({ message: "Scene uploaded successfully", type: "info" });
    })
    .catch((err) => {
      setStatus({ message: `Upload failed: ${err.message}`, type: "error" });
    });
}

