import { Handle, Position } from 'reactflow';
import './nodeStyles.css';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div className="node">
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      <div className="node-header">{title}</div>

      <div className="node-body">
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
