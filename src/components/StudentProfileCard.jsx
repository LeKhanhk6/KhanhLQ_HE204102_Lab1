import '../styles/StudentCard.css';
import student from '../data/studentData.jsx';
import '../styles/Button.css'
import LikeButton from './LikeButton.jsx';
import StatusButton from './StatusButton.jsx';
function StudentProfileCard({ darkMode, status, onToggleStatus }) {

  const cardClass = darkMode ? 'student-profile dark-card' : 'student-profile light-card';
  
  return (
    <div className={cardClass}>

      <div className="student-header">
        <div className="avatar-container">
          <img src={student.avatarUrl} alt='student avatar' />
          <span className={`status-dot ${status ? 'online-dot' : 'offline-dot'}`}></span>
        </div>
        <div className="info-container">
          <div className="student-name">{student.fullName}</div>
          <div className="card-subtitle">Student Profile Card</div>
          <div className="student-id-row"><strong>Student ID:</strong> {student.studentID}</div>
        </div>
      </div>

      <div className="text">Information</div>
      <div className="info-text">
        {student.fullName} ({student.studentID}) — class {student.className}, major {student.major}.
      </div>

      <div className="student-info"><strong>Class:</strong> {student.className}</div>
      <div className="student-info"><strong>Major:</strong> {student.major}</div>

      <div className="hobbies-section">
        <strong>Hobbies</strong>
        <div className='hobby-tags'>
          {student.hobbies.map((hobby, index) => (
            <span key={index} className='hobby-tag'>{hobby}</span>
          ))}
        </div>
      </div>

      <div className="status-display-section">
        <div className="status-label">Current Student Status</div>
        <div className={`status-banner ${status ? 'online-banner' : 'offline-banner'}`}>
          {status ? (<><strong>Online</strong> — Student is available now.</>) : (<><strong>Offline</strong> — Student is away.</>)}
        </div>

        <StatusButton status={status} onToggleStatus={onToggleStatus}/>
      </div>

      <div className="like-display-section">
        <LikeButton />
      </div>
    </div>
  );
}

export default StudentProfileCard;