import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import type { CssPreviewProps } from './interface';

// import './js-preview.css';

export function CssPreview({ cssCode }: CssPreviewProps) {
  return (
    <CodeMirror
      value={cssCode.trim()}
      theme={vscodeDark}
      extensions={[css()]}
      className="max-h-125 overflow-auto text-sm"
      readOnly
      basicSetup={{
        // 关闭代码折叠功能
        foldGutter: false,
        // 关闭自动补全功能
        autocompletion: false,
        // 关闭当前活动行高亮
        highlightActiveLine: false,
        // 关闭侧边栏（gutter）当前行高亮
        highlightActiveLineGutter: false,
        drawSelection: false,
      }}
    />
  );
}
