import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Families from './pages/Families';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Merch from './pages/Merch';
import Officers from './pages/Officers';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f5f5f5' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/families" element={<Families />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/merch" element={<Merch />} />
                        <Route path="/officers" element={<Officers />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;