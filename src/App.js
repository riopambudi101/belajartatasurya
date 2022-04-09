import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Tentang from './pages/Tentang';
import Petunjuk from './pages/Petunjuk';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:slug" element={<DetailPage />} />
        <Route exact path="/tentang" element={<Tentang />} />
        <Route exact path="/petunjuk" element={<Petunjuk />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
