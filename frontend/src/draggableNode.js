export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = 'move';
    event.currentTarget.style.cursor = 'grabbing';
  };

  return (
    <div
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => (e.currentTarget.style.cursor = 'grab')}
      draggable
      style={{
        cursor: 'grab',
        width: '90px',
        height: '60px',
        backgroundColor: 'var(--bg-node)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = 'scale(1.05)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = 'scale(1)')
      }
    >
      {label}
    </div>
  );
};
