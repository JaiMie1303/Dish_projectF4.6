import React from 'react';
import '../components/styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} Copyright by JaiMie</p>
      </div>
    </footer>
  );
}

export default Footer;