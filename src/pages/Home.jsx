import React from 'react';

function Home() {
  return (
    <main>
      <section id="home" className="hero" role="region" aria-label="Hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Elderlyze</h1>
            <p className="tagline">Your Companion for Wellness, Safety, and Care</p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-ghost btn-lg">Learn More</button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="bubble bubble-1">💬</div>
            <div className="bubble bubble-2">💚</div>
            <div className="bubble bubble-3">😊</div>
          </div>
        </div>
      </section>

      <section id="features" className="features" role="region" aria-label="Features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <article className="feature-card">
              <div className="icon" aria-hidden="true">🤖</div>
              <h3>Emotional Chatbot</h3>
              <p>Compassionate support in English and Urdu.</p>
            </article>
            <article className="feature-card">
              <div className="icon" aria-hidden="true">😊</div>
              <h3>Mood Detection</h3>
              <p>Emoji-based mood sensing that prompts helpful chats.</p>
            </article>
            <article className="feature-card">
              <div className="icon" aria-hidden="true">💊</div>
              <h3>Medicine Reminders</h3>
              <p>Timely push notifications so you never miss a dose.</p>
            </article>
            <article className="feature-card">
              <div className="icon" aria-hidden="true">🚨</div>
              <h3>SOS Alerts</h3>
              <p>Manual alerts and auto-SOS after 3 hours of inactivity (SMS family).</p>
            </article>
            <article className="feature-card">
              <div className="icon" aria-hidden="true">🌐</div>
              <h3>Multi-language Support</h3>
              <p>Seamless Urdu and English responses from the chatbot.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how" role="region" aria-label="How it works">
        <div className="container">
          <h2>How It Works</h2>
          <ol className="steps" aria-label="Steps to use Elderlyze">
            <li><span className="step-badge">1</span> Sign Up</li>
            <li><span className="step-badge">2</span> Detect Mood</li>
            <li><span className="step-badge">3</span> Chat</li>
            <li><span className="step-badge">4</span> Get Help</li>
          </ol>
        </div>
      </section>

      <section id="tutorial" className="tutorial" role="region" aria-label="Tutorial">
        <div className="container">
          <h2>Learn How to Use Elderlyze</h2>
          <div className="tutorial-card">
            <p>Follow our friendly walkthrough to get started quickly. Large buttons, clear text, and simple steps guide you along the way.</p>
            <button className="btn btn-secondary">Start Tutorial</button>
          </div>
        </div>
      </section>

      <section className="safety" role="region" aria-label="Safety features">
        <div className="container">
          <h2>Safety First</h2>
          <div className="safety-grid">
            <div className="safety-item">
              <div className="phone-notif" aria-hidden="true">
                <div className="notif">SOS Alert sent to Family ✔</div>
                <div className="notif muted">No activity detected for 3 hours</div>
              </div>
              <p>Automatic inactivity checks send SOS to loved ones if needed.</p>
            </div>
            <div className="safety-item">
              <div className="phone-notif" aria-hidden="true">
                <div className="notif">Medicine Reminder: 8:00 PM 💊</div>
                <div className="notif muted">Tap to confirm you took it</div>
              </div>
              <p>Smart reminders keep you on track with your health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" role="region" aria-label="Testimonials">
        <div className="container">
          <h2>What People Say</h2>
          <div className="quotes">
            <blockquote>“I feel cared for and safe using Elderlyze.”</blockquote>
            <blockquote>“The reminders and gentle chats brighten my day.”</blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;


