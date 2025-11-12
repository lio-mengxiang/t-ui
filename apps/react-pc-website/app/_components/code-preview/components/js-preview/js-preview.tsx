import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { materialDark } from '@uiw/codemirror-theme-material';

import type { JsPreviewProps } from './interface';

import './js-preview.css';

export function JsPreview({ code, onChange, readOnly = false }: JsPreviewProps) {
  return (
    <CodeMirror
      value={code.trim()}
      theme={materialDark}
      extensions={[javascript({ jsx: true })]}
      readOnly={readOnly}
      className="max-h-125 overflow-auto text-sm"
      onChange={onChange}
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
