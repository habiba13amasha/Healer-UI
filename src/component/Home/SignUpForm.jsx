import React from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="left-side">
        <img src="/form-image.png" alt="" />
      </div>
      <div className="right-side">
        <h2>Join our <span className='colored-word'>Newsletter</span></h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" id="daily" />
              Daily
            </label>
            <label>
              <input type="checkbox" id="weekly" />
              Weekly
            </label>
          </div>
          <p>You can change your mind at any time by clicking the unsubscribe link in any email you receive from us. By clicking below, you agree that we may process your information in accordance with our Privacy Policy.</p>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
