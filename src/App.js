import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Theme from './pages/Theme'
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/Browser';

function App() {
   return (
  
      <>
        <Header />
        <Routes>
          <Route path="/"  element={ <Theme /> } />
          <Route path="/browser" element={ <Browser />} />
        </Routes>
        <Footer />
      </>
    
  
      )
}

export default App;
