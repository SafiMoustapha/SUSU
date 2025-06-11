import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './pages/Accueil/Accueil';
import Associations from './pages/Associations/Associations';
import BouquetsSante from './pages/BQS/BouquetsSante';
import Devis from './pages/Devis/Devis';
import Blog from './pages/Blog/Blog';
import Assurance from './pages/Assurance/Assurance';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/bouquetssante" element={<BouquetsSante />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/assurance" element={<Assurance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
