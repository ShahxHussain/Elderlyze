import React, { useState } from 'react';

const EMOJIS = [
  '😊','😐','😔','😟','😄','😞','😌','😣','🤗','🥲','😭','😡','😤','😴','😵','😇'
];

const MOOD_PROMPTS = {
  '😊': 'Glad you feel good! Would you like a gratitude prompt or a light stretch? ',
  '😔': 'I’m here. Want to talk about what’s on your mind or try a calming exercise?',
  '😟': 'It sounds worrying. Would breathing or a short walk help?',
  '😞': 'Rough day? We can try reframing thoughts together.',
  '😡': 'Anger is valid. Try a quick release exercise?',
  '😭': 'Sending comfort. Would you like soothing music suggestions or a supportive chat?',
  '😌': 'Peaceful is great. Want to keep a small journal note today?'
};

function Mood() {
  const [selected, setSelected] = useState('');

  const prompt = MOOD_PROMPTS[selected] || 'Tap an emoji that matches how you feel right now.';

  return (
    <main className="mood">
      <div className="container">
        <h1 className="mood-title">How are you feeling today?</h1>
        <p className="mood-sub">Tap an emoji. We’ll tailor a gentle prompt for you.</p>

        <div className="emoji-board" role="group" aria-label="Select your mood">
          {EMOJIS.map((e) => (
            <button
              key={e}
              className={`emoji-btn${selected === e ? ' selected' : ''}`}
              onClick={() => setSelected(e)}
              aria-pressed={selected === e}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="mood-prompt">
          {prompt}
        </div>

        <div className="mood-actions">
          <button className="btn btn-primary btn-lg" disabled={!selected}>Start Chat</button>
          <button className="btn btn-ghost">Clear</button>
        </div>
      </div>
    </main>
  );
}

export default Mood;


