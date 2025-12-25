import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const submitPipeline = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Summary\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? 'Yes' : 'No '}`
      );
    } catch (err) {
      alert('Failed to submit pipeline');
      console.error(err);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
      <button
        onClick={submitPipeline}
        style={{
          background: '#2563eb',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: 8,
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
