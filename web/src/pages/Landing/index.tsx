import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  ContentWrapper,
  Location,
  EnterApp,
} from '../../styles/pages/landing';

import logoImg from '../../images/logo.svg';

function Landing() {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt='Happy' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Niterói</strong>
          <span>Rio de Janeiro</span>
        </Location>

        <EnterApp to='/app'>
          <FiArrowRight size={26} color='rgba(0,0,0,0.6)' />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
}

export default Landing;
