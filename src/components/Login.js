import React from "react";
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
      };

    return (
        <div>
          <h1>Login</h1>
          <button onClick={navigateToProfile}>Login</button>
        </div>
      );
}

export default Login;
  
  