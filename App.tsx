import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AICoach from './components/AICoach';
import Home from './pages/Home';
import Education from './pages/Education';
import Application from './pages/Application';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-800">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/application" element={<Application />} />
          </Routes>
        </main>

        <AICoach />
        
        <footer className="bg-slate-50 py-8 border-t border-slate-200 mt-20">
          <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Everyday AI Coach. Making AI simple.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;