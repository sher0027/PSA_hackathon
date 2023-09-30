import {Routes, Route} from 'react-router-dom';
import Profile from './components/Profile.js'; 
import Login from './components/Login.js';
import Recommendation from './components/Recommendation.js';
import { mentors, users } from './data';
import MentorProfile from './components/MentorProfile.js'; 


function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile user={users[0]} />} />
          <Route path="/recommendation" element={<Recommendation />} />
          {mentors.map((mentor) => (
          <Route key={mentor.id} path={`/mentor${mentor.id}`} element={<MentorProfile mentor={mentor} />} />
        ))}
        </Routes>
      </div>
    </div>
  );
}

export default App; 