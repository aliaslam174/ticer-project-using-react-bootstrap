
import './App.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import Footer from './components/Footer';
// import HeroSection from './components/HeroSection';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Ourvision from './components/Ourvision';
import Counter from './components/Counter';
// import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Modrenschool from './components/Modrenschool';
import pic1 from'./img/moderen/pic1.jpg';
import pic2 from'./img/moderen/pic2.jpg';
import pic3 from'./img/moderen/pic3.jpg';
import pic4 from'./img/moderen/pic4.jpg';
import pic5 from'./img/moderen/pic5.jpg';
import Megamanue from './components/Megamanue';

function App() {
  // var tittle=['logo','link2','link3'];
  var school=[pic1,pic2,pic3,pic4,pic5];
  return (
    
    <div className="App">
  {/* <Megamanue/> */}
      
      <Topbar/>
      
<Navbar />

<Slider/>
<Ourvision/>
<Counter/>

<Gallery/>
<Modrenschool img={school} />
{/* <Header/> */}
<Footer/>

{/* <HeroSection /> */}
    </div>
  );
}

export default App;
