import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Book" className="Logo" />

      <p>
      Created by
        {' '}
        <a href="https://github.com/alinelopess">
          Aline Lopes
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
