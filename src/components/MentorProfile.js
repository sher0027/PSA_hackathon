import React from 'react';
import './MentorProfile.css';
import {useNavigate} from 'react-router-dom';

function MentorProfile({ mentor }) {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/recommendation');
      };
  return (
    <div>
    <div className="top-bar">
      <div className="back-button" onClick={navigateBack}>Back</div>
      <div className="app-name">PSA app</div>
    </div>
      <h2>{mentor.name}'s Profile</h2>
      <div className="mentor-details">
        <div className="mentor-image">
          <img src={mentor.imageUrl} alt={`${mentor.name}'s Image`} />
        </div>
          <div className="mentor-role">{mentor.role}</div>
          <div className="mentor-skills">
            Skills:{' '}
            {mentor.skills.map((skill, index) => (
              <span key={index}> <div className="skill">{skill} </div></span>
            ))}
          </div>
          <button>Match</button>
          {/* Add more mentor-specific details here */}
        </div>
      </div>
  );
}

export default MentorProfile;






