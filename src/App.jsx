import {useState} from 'react';
import './styles/App.css';
import DarkModeButton from './components/DarkModeButton.jsx';
import StudentProfileCard from './components/StudentProfileCard.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleStatus = () => setStatus(!status);
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="actions-bar">
        <DarkModeButton darkMode={darkMode} onToggle={toggleTheme} />
      </header>
      
      <main>
        <StudentProfileCard darkMode={darkMode} status={status} onToggleStatus={toggleStatus} />
      </main>
    </div>
  );
}

export default App;