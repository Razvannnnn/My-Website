import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import StyledSection from './components/StyledSection';



function App() {
  
  useEffect(() => {
    document.title = 'Răzvan Mîndrilă'
  })

  return (
    <div className="App bg-gradient-to-b from-neutral-900 to-black min-h-screen flex flex-col">
      <StyledSection className="flex-grow"></StyledSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
