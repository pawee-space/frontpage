import React from 'react';

import logoImg from '../assets/logo.svg';

import { Container, Header, ButtonsContainer } from '../styles/pages/Home';

const Home: React.FunctionComponent = () => (
  <Container>
    <Header>
      <img src={logoImg} alt="Pawee" />
      <ButtonsContainer>
        <button type="button">Entrar</button>
        <button type="button">Cadastrar-se</button>
      </ButtonsContainer>
    </Header>

    <div>
      <h1>Um título aqui.</h1>
      <p>Uma frase de efeito que Vitctória ainda vai providenciar.</p>
    </div>
  </Container>
);

export default Home;
