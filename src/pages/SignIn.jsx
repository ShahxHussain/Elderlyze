import React, { useState } from 'react';
import '../Assets/Css/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <main className="auth">
      <div className="container">
        <div className="auth-card">
          <div className="auth-icon" aria-hidden="true">💙</div>
          <h1>Welcome Back</h1>
          <p className="auth-sub">Sign in to continue your journey with Elderlyze</p>

          <form className="auth-form" onSubmit={(e) => {
            e.preventDefault();
            if (email.trim().toLowerCase() === 'abc@gmail.com' && password === 'QWE#123') {
              navigate('/app');
            } else {
              setError('Incorrect email or password (Hint: abc@gmail.com / QWE#123)');
            }
          }}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              <span className="eye" aria-hidden="true">👁️</span>
            </div>

            {error && <div className="error-text" role="alert">{error}</div>}

            <div className="auth-row">
              <label className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <Link className="link" to="#">Forgot password?</Link>
            </div>

            <button className="btn btn-primary btn-lg" type="submit">Sign In</button>
          </form>

          <p className="auth-alt">Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </main>
  );
}

export default SignIn;


