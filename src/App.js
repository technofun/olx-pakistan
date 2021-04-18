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
      
      <main>
        <FeaturedProdSlider/>
      </main>
      <footer><p>numan ijaz.</p></footer>
    </div>
  );
}

export default App;
