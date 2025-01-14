/* eslint-disable no-unused-vars */
import './styles.css';
import '../../styles/globalstyle.css';

import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/lock.png';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import UserProfile from '../UserProfile';
function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <div className="header">
        <h1>Welcome</h1>
        <div className="text">
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div></div>
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputs">
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div></div>
            <div className="forgot-password">
              <span>Forgot Your Password ?</span>
            </div>
            <div className="submit-container">
              <div>
                <button type="button">Sign Up!</button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => navigate('/userprofile', { replace: true })}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
