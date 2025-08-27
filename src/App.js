import './styles/app.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import SOSInteraction from './pages/SOSInteraction';
import Moods from './pages/Moods';
import Chatbot from './pages/Chatbot';
import Medicines from './pages/Medicines';
import PhysicalActivities from './pages/PhysicalActivities';
import Footer from './components/Footer';
import {Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useEffect as ReactUseEffect, useState } from 'react';
import { auth } from './FIrebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const location = useLocation();
  const hideChrome = location.pathname.startsWith('/app/chat');
  
  // Define which pages should show the footer
  const showFooter = ['/', '/signin', '/signup'].includes(location.pathname);
  
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

  function RequireAuth({ children }) {
    const [checking, setChecking] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (u) => {
        setUser(u);
        setChecking(false);
      });
      return () => unsub();
    }, []);
    if (checking) return null; // could render a loader
    if (!user) return <Navigate to="/signin" replace />;
    return children;
  }

  return (
      <div className="App">
        {!hideChrome && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/app" element={<RequireAuth><Main /></RequireAuth>} />
          <Route path="/app/sos" element={<RequireAuth><SOSInteraction /></RequireAuth>} />
          <Route path="/app/mood" element={<RequireAuth><Moods /></RequireAuth>} />
          <Route path="/app/chat" element={<RequireAuth><Chatbot /></RequireAuth>} />
          <Route path="/app/medicines" element={<RequireAuth><Medicines /></RequireAuth>} />
          <Route path="/app/physical-activities" element={<RequireAuth><PhysicalActivities /></RequireAuth>} />
        </Routes>
        {showFooter && <Footer />}
      </div>
  );
}


export default App;
