import React from 'react';
import '../Assets/Css/SignUp.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/logo.png'

function SignUp() {
  return (
    <main className="auth">
      <div className="container">
        <div className="auth-card">
          <img src={Logo} alt="Elderlyze" className="auth-logo" />
          <h1>Create your account</h1>
          <p className="auth-sub">Join Elderlyze for wellness, companionship, and safety</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Enter your full name" required />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Create a strong password" required />

            <label htmlFor="confirm">Confirm Password</label>
            <input id="confirm" type="password" placeholder="Re-enter your password" required />

            <button className="btn btn-primary btn-lg" type="submit">Sign Up</button>
          </form>

          <p className="auth-alt">Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;


