export interface JsPreviewProps {
  code: string;
  cssCode?: string;
  onChange?: (code: string) => void;
  readOnly?: boolean;
}
