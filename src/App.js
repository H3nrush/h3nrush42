import { useState } from 'react';
import './App.css';
import telegramLogo from './icons8-telegram.gif'
function App() {
  const [hovered, setHovered] = useState(false);

  const ibanDirect = () => {
    alert('if you want to send by IBAN, please contact me by Email at: Hassanmohammadi078@gmail.com');
  }

  return (
    <div className="App">

      <div className="payment-container">

        {/* Penguin */}
        <div className={`penguin ${hovered ? 'happy' : ''}`}>

          <div className="speech">
            Thank You! ❤️
          </div>

          <div className="penguin-body">

            <div className="penguin-head">

              <div className="eye left-eye">
                <div className="pupil"></div>
              </div>

              <div className="eye right-eye">
                <div className="pupil"></div>
              </div>

              <div className="beak"></div>

            </div>

            <div className="belly"></div>

            <div className="wing left-wing"></div>
            <div className="wing right-wing"></div>

            <div className="foot left-foot"></div>
            <div className="foot right-foot"></div>

          </div>

        </div>

        <h1>Support Me ❤️</h1>

        <p>
          Choose your preferred payment method
        </p>

        <div className="payment-buttons">

          <a href="https://www.paypal.com/paypalme/H3nrush42" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            <div
              className="payment-button paypal"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span>💰</span>
              PayPal:
              @H3nrush42
            </div>
          </a>

          <a href="https://revolut.me/mikkarra" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                      <div
            className="payment-button revolut"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span>💜</span>
            Revolut Pay:
            @mikkarra
          </div>
          </a>

          <div
            className="payment-button iban"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={ibanDirect}
          >
            <span>🏦</span>
            IBAN
          </div>

          <a href="https://t.me/mikkarra" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
          <div className="telegram-info">
            <img src={telegramLogo} alt="Telegram Logo" className="telegram-logo" />
          </div>
          </a>

        </div>

      </div>

    </div>
  );
}

export default App;