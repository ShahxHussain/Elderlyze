import './styles/app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Moods from './pages/Moods';
import Chatbot from './pages/Chatbot';
import Medicines from './pages/Medicines';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const hideChrome = location.pathname.startsWith('/app/chat');
  
  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        const id = location.hash.slice(1);
        const target = document.getElementById(id) || document.querySelector(id ? `.${id}` : '');
        if (target && typeof target.scrollIntoView === 'function') {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
      <div className="App">
        {!hideChrome && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/app" element={<Main />} />
          <Route path="/app/mood" element={<Moods />} />
          <Route path="/app/chat" element={<Chatbot />} />
          <Route path="/app/medicines" element={<Medicines />} />
        </Routes>
        <Footer />
      </div>
  );
}


export default App;
