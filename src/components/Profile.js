import React from "react";
import {useNavigate} from 'react-router-dom';
import './Profile.css'

function Profile({ user }) {
    const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/');
  };

  const navigateToFindMentor = () => {
    navigate('/recommendation');
  };
  return (
    <div>
    <div className="top-bar">
      <div className="app-name">PSA app</div>
    </div>
      <h2>{user.name}'s Profile</h2>
      <div className="user-image">
          <img src={user.imageUrl} alt={`${user.name}'s Image`} />
        </div>
      <div>
        User role: {user.role}
        <br></br>
        User Age: {user.age}
        <br></br>
        User years of experience: {user.yearsOfExperience}
        <br></br>
        <button onClick={navigateToLogin}>Logout</button>
        <button onClick={navigateToFindMentor}>Find Mentor</button>
      </div>
    </div>
  );
}

export default Profile;
  
  