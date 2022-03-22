import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:slug" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
