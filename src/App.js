import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopLinks from './components/topLinks.jsx';
import AddSection from './components/addSection.js';
import FeaturedProdSlider from './components/featuredProdSlider.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopLinks />
      <AddSection />
      <p>numan ijaz</p>
      <main>
        <FeaturedProdSlider/>
      </main>
    </div>
  );
}

export default App;
