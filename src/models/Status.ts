export type StatusType = "info" | "error";

export interface Status {
  message: string;
  type?: StatusType;
}
