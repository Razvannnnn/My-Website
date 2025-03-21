import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import StyledSection from './components/StyledSection';
import Background from './components/Background';

function App() {
  useEffect(() => {
    document.title = 'Răzvan Mîndrilă';
  }, []);

  return (
    <div className="App min-h-screen flex flex-col">
      <div className="background-svg min-h-screen bg-[#0d0d0d]"></div>
      <Background></Background>
      <StyledSection className="flex-grow"></StyledSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
