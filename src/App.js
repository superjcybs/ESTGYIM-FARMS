import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Subscribe from './components/Subscribe';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Team from './components/Team';

function App() {

  const [showWaText, setShowWaText] = React.useState(true)

  const ShowTime = () => {
    if (window.scrollY >= 120) {
      setShowWaText(false);
    } else {
      setShowWaText(true)
    }
  }
  window.addEventListener('scroll', ShowTime);

  return (
    <div className="App">
      <Header />
      <Brand />
      <Product />
      <Contact />
      <Team/>
      <Subscribe />

      <a href="https://wa.me/233247792110"  className={showWaText ?"wa-text":"dont"}>Chat on Whatsapp<br /><i className="icofont-hand-down"></i></a>
      <a href="https://wa.me/233247792110" className="whatsapp"><i className="icofont-whatsapp"></i></a>

      <div>
        <div className="footer h-23 clearfix text-white" style={{ "backgroundColor": '#34Ff23' }}></div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white d-flex justify-content-around">
          <div>© SUPAMART Copyright 2022. All Rights Reserved </div>
          <div>Powered by <a style={{ color: 'yellow' }} href="https://superjcybs.com"> &nbsp; SUPERJCYBS</a></div>
          <span style={{ 'backgroundColor': 'white', color: 'blue', fontWeight: 'bold', paddingLeft: '10px', borderRadius: '50%', fontSize: '20px', width: '30px', height: '30px' }}><a href='https://www.facebook.com/superjcybs'>f</a></span>
        </nav>
      </div>
    </div>
  );
}

export default App;
