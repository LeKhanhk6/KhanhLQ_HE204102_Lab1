import { useState } from "react";
import '../styles/Button.css';
import '../styles/LikeButton.css';

function LikeButton() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="like-container">
      <div className="like-title">LIKE COUNTER</div>
      <div className="like-count">{count}</div>
      <button className="btn btn-like" onClick={() => setCount(count + 1)}>👍 Like (+1)</button>
    </div>
  );
}

export default LikeButton;