import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Associations from './pages/Associations';
import BouquetsSante from './pages/BouquetsSante';
import Devis from './pages/Devis';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/bouquetssante" element={<BouquetsSante />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
