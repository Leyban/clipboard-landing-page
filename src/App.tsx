import './styles/css/app.css';
import { BottomCallToAction } from './components/BottomCallToAction';
import { CompanyLogos } from './components/CompanyLogos';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Features />
      <CompanyLogos />
      <BottomCallToAction />
      <Footer />
    </div>
  );
}

export default App;
