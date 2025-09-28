// src/services/SceneService.ts
import type { SceneState } from "../models/SceneState";

export function serializeScene(scene: SceneState): string {
  return JSON.stringify(scene, null, 2);
}

export function deserializeScene(json: string): SceneState {
  return JSON.parse(json);
}

function isValidModelType(str: string): boolean {
  return str === "LDraw/3001.dat" || str === "LDraw/3062a.dat";
}

function isValidHexColor(str: string): boolean {
  return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(str);
}

function isValidTexture(str?: string): boolean {
  if (!str) return true;
  // base64 data URL
  if (/^data:image\/(png|jpeg|jpg|gif|bmp|webp);base64,/.test(str)) {
    try {
      atob(str.split(",")[1]); // decode just the base64 part
      return true;
    } catch {
      return false;
    }
  }
  else
  {
    return false;
  }
}

export function validateSceneState(scene: SceneState) {
  if (!isValidHexColor(scene.background))
    throw new Error("Invalid background");

  if (!isValidHexColor(scene.color))
    throw new Error("Invalid color");

  if (!isValidModelType(scene.model))
    throw new Error("Invalid model");

  if (!isValidTexture(scene.texture))
    throw new Error("Invalid texture");
}
