import styles from './toolbar.module.css';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.nodes}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
    </div>
  );
};
