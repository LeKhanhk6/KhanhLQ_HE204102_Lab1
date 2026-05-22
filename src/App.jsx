import './App.css';
import { useState } from 'react';

function StudentProfileCard({ darkMode }) {
  const student = {
    avatarUrl: "src/assets/student_avatar.jpg", 
    fullName: 'Le Quoc Khanh',
    studentID: 'HE204102',
    className: 'SE2009-JS',
    major: 'Software engineering',
    hobbies: ['play game', 'outside with friend', 'design website'] 
  };

  const cardClass = darkMode ? 'student-profile dark-card' : 'student-profile light-card';
  
  return (
    <div className={cardClass}>
      <div className="avatar-container">
        <img src={student.avatarUrl} alt='student avatar' />
      </div>
      <div className="student-name">{student.fullName}</div>
      <div className="student-info"><strong>ID:</strong> {student.studentID}</div>
      <div className="student-info"><strong>Class:</strong> {student.className}</div>
      <div className="student-info"><strong>Major:</strong> {student.major}</div>
      <div className="hobbies-section">
        <strong>Hobbies:</strong>
        <ul>
          {student.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const StatusButton = () => {
  const [status, setStatus] = useState(true);

  return (
    <button className="btn btn-status" onClick={() => setStatus(!status)}>
      {status ? "🟢 Online" : "🔴 Offline"}
    </button>
  );
};

const DarkModeButton = ({ darkMode, onToggle }) => {
  return (
    <button className="btn toggle-btn" onClick={onToggle}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

function LikeButton() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="like-section">
      <div>Count : <strong>{count}</strong></div>
      <button className="btn btn-like" onClick={() => setCount(count + 1)}>👍 Like</button>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="actions-bar">
        <DarkModeButton darkMode={darkMode} onToggle={toggleTheme} />
        <StatusButton />
      </div>
      
      <StudentProfileCard darkMode={darkMode} />
      
      <LikeButton />
    </div>
  );
}

export default App;