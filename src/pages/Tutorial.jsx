import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const steps = [
  {
    id: 'account',
    title: 'Create your account and sign in',
    content: (
      <div className="tutorial-text">
        <ol>
          <li>Open Sign Up and enter your Name, Email, and Password.</li>
          <li>Check your details and tap “Sign Up”.</li>
          <li>Return to Sign In and log in with your email and password.</li>
        </ol>
      </div>
    )
  },
  {
    id: 'mood',
    title: 'Pick a mood and start chatting',
    content: (
      <div className="tutorial-text">
        <ol>
          <li>Tap the Mood option and choose an emoji that matches how you feel.</li>
          <li>Elderlyze suggests helpful prompts based on your mood.</li>
          <li>Start chatting with the chatbot to receive support and guidance.</li>
        </ol>
      </div>
    )
  },
  {
    id: 'sos',
    title: 'Add SOS contacts and inactivity timer',
    content: (
      <div className="tutorial-text">
        <ol>
          <li>Open SOS settings and add a contact’s Name, Relation, and Phone.</li>
          <li>Set the contact Priority (Primary or Secondary).</li>
          <li>Turn on Auto SOS and choose a time in hours. By default, an alert is sent after 3 hours of inactivity.</li>
        </ol>
      </div>
    )
  },
  {
    id: 'meds',
    title: 'Medication reminders',
    content: (
      <div className="tutorial-text">
        <ol>
          <li>Go to Medication Reminders and tap Add Medicine.</li>
          <li>Fill in Name, Dosage, Time, Start date, and End date.</li>
          <li>Save the reminder. Add more medicines if you need to.</li>
        </ol>
      </div>
    )
  }
];

function Tutorial() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const step = steps[index];

  const goNext = () => setIndex(i => Math.min(i + 1, steps.length - 1));
  const onSkip = () => navigate('/signin');

  return (
    <main className="tutorial-page">
      <div className="container">
        <div className="tutorial-header">
          <div className="header-left">
            <span className="step-badge">{index + 1}</span>
            <h1>{step.title}</h1>
          </div>
          <div className="header-right">
            <button className="btn btn-ghost" onClick={onSkip} aria-label="Skip tutorial">Skip <X size={16} /></button>
            {index < steps.length - 1 && (
              <button className="btn btn-primary" onClick={goNext} aria-label="Next step">Next <ArrowRight size={16} /></button>
            )}
          </div>
        </div>

        <div className="tutorial-body">
          {step.content}
        </div>
      </div>
    </main>
  );
}

export default Tutorial;


