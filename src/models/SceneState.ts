export interface SceneState {
  description: string;
  color: string;
  texture?: string; // base64 URL
  background: string;
  transparent: boolean;
  model: string;    // path to LDraw part
}
