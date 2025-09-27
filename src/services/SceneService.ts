// src/services/SceneService.ts
import type { SceneState } from "../models/Scene";

export function serializeScene(scene: SceneState): string {
  return JSON.stringify(scene, null, 2);
}

export function deserializeScene(json: string): SceneState {
  return JSON.parse(json);
}
