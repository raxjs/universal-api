export interface Clipboard {
  readText(): Promise<string>;
  writeText(text: string): Promise<null>;
}
