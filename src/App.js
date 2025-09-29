import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Theme from './pages/Theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browser from './pages/Browser';

function App() {
   return (
  
      <>
        <Header />
        <Routes>
          <Route path="/" exact component={ Theme } />
          <Route path="/browser" component={ Browser} />
        </Routes>
        <Footer />
      </>
    
  
      )
}

export default App;
