import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import './App.css';
import CreateFuture from './components/CreateFuture';
import Footer from './components/Footer'


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CreateFuture/>
      <Footer/>
    </div>
  );
}

export default App;
