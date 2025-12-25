import { useEffect, useMemo, useRef, useState } from 'react';
import { BaseNode } from './baseNode';
import { Handle, Position } from 'reactflow';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{Input}}');
  const textareaRef = useRef(null);

  const variables = useMemo(() => {
    const matches = [...text.matchAll(VARIABLE_REGEX)];
    return [...new Set(matches.map(m => m[1]))];
  }, [text]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 'px';
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map(v => ({ id: v }))}
      outputs={[{ id: 'output' }]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{
          width: '100%',
          minHeight: '60px',
          background: '#020617',
          color: '#fff',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          padding: '10px',
          resize: 'none',
          overflow: 'hidden',
          boxSizing: 'border-box',
          lineHeight: '1.5',
          pointerEvents: 'auto'
        }}
      />
    </BaseNode>
  );
};
