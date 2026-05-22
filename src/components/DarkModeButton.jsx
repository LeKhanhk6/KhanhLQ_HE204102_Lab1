import '../styles/Button.css';
const DarkModeButton = ({ darkMode, onToggle }) => {
  return (
    <button className="btn toggle-btn" onClick={onToggle}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeButton;