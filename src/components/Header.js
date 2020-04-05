import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>Coronavirus (COVID-19) Map Dashboard</h1>
        <ul>
          <li>
            <a href="https://github.com/colbyfayock/gatsby-starter-leaflet">
              Gatsby Starter Leaflet
            </a>
          </li>
          <li>
            <a href="https://github.com/raamir/coronavirus-map">
              <FaGithub /> Github Repository
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
