export interface JsPreviewProps {
  code: string;
  cssCode?: string;
  onChange?: (code: string) => void;
  onCssChange?: (cssCode: string) => void;
  readOnly?: boolean;
  cssEditable?: boolean;
}
