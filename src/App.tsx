import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/about" element={<About />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App