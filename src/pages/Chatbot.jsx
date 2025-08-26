import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Assets/Css/Chatbot.css';
import { Send, Wand2, HeartHandshake, SmilePlus } from 'lucide-react';
import logo from '../Assets/Images/Logo.png';

function Chatbot() {
  const location = useLocation();
  const initialMood = location.state?.mood || '';  // get emoji if passed

  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Hello! I am here with you. How are you feeling today?' },
  ]);

  const [input, setInput] = useState(initialMood ? `I feel ${initialMood}` : '');
  const listRef = useRef(null);

  useEffect(() => {
    if (initialMood) {
      // Auto-send mood as first user message
      const next = { id: Date.now(), role: 'user', text: `I feel ${initialMood}` };
      setMessages((m) => [
        ...m, 
        next, 
        { id: Date.now() + 1, role: 'bot', text: `Thanks for sharing how you feel ${initialMood}. Would you like a small exercise to help?` }
      ]);
    }
  }, [initialMood]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const next = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((m) => [
      ...m, 
      next, 
      { id: Date.now() + 1, role: 'bot', text: 'I hear you. Let’s take this one small step at a time.' }
    ]);
    setInput('');
  }

  return (
    <main className="chat">
      <header className="chat-header">
        <div className="chat-header-left">
          <img src={logo} className="chat-logo" alt="Elderlyze" />
          <div>
            <div className="chat-title">Elderlyze</div>
            <div className="chat-status">Online • compassionate support</div>
          </div>
        </div>
        <div className="chat-header-right">
          <span className="chip online" aria-label="Connection status">● Live</span>
        </div>
      </header>

      <div className="chat-layout">
        <aside className="chat-sidebar" aria-label="Conversation tools">
          <div className="chat-sidebar-header">Recent interactions</div>
          <nav className="chat-nav">
            {messages.filter((m) => m.role === 'user').slice(-5).reverse().map((m) => (
              <div key={m.id} className="chat-nav-item" title={m.text}>
                {m.text.length > 28 ? m.text.slice(0, 28) + '…' : m.text}
              </div>
            ))}
            {messages.filter((m) => m.role === 'user').length === 0 && (
              <div className="chat-nav-item">No recent messages</div>
            )}
          </nav>
        </aside>

        <section className="chat-main">
          <div className="chat-actions" aria-label="Quick actions">
            <button className="chip action" type="button"><Wand2 size={14} /> Breathing</button>
            <button className="chip action" type="button"><HeartHandshake size={14} /> Grounding</button>
            <button className="chip action" type="button"><SmilePlus size={14} /> Gratitude</button>
          </div>
          <div ref={listRef} className="chat-messages" role="log" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`chat-row ${m.role}`}>
                {m.role === 'bot' && <div className="avatar bot">🤖</div>}
                <div className={`chat-bubble ${m.role}`}>{m.text}</div>
                {m.role === 'user' && <div className="avatar user">🙂</div>}
              </div>
            ))}
          </div>

          <form className="chat-inputbar" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Write a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Message"
            />
            <button className="btn btn-primary" type="submit" aria-label="Send message">
              <Send size={16} /> <span className="send-text">Send</span>
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Chatbot;
