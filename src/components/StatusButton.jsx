import '../styles/Button.css';

const StatusButton = ({ status, onToggleStatus }) => {
  return (
    <button className="btn switch-status-btn" onClick={onToggleStatus}>
      Switch to {status ? 'Offline' : 'Online'}
    </button>
  );
};

export default StatusButton;
