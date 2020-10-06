import React from 'react';

import logoImg from '../assets/logo.svg';
import mockupImg from '../assets/mockup.svg';
import dataMockupImg from '../assets/data-mockup.svg';

import {
  HomeContainer, Header, ButtonsContainer, Main, ImageContainer, DataContent,
} from '../styles/pages/Home';

const Home: React.FunctionComponent = () => (
  <>
    <HomeContainer>
      <Header>
        <img src={logoImg} alt="Pawee" />
        <ButtonsContainer>
          <button type="button">Entrar</button>
          <button type="button">Cadastrar-se</button>
        </ButtonsContainer>
      </Header>

      <Main>
        <div>
          <h1>Salve, apoie e adote.</h1>
          <p>
            A Pawee oferece visibilidade para
            <br />
            {' '}
            Ong’s e abrigos de animais, faça parte!
          </p>
          <button type="button">Fazer Parte</button>
        </div>
      </Main>
      <ImageContainer>
        <img src={mockupImg} alt="Pawee" />
      </ImageContainer>
    </HomeContainer>
    <DataContent>
      <h1>Dados importantes que nos deixam triste</h1>
      <p>Quanto maior os números mais animais em situação de risco e abandono.</p>

      <div>
        <div>
          <img src={dataMockupImg} alt="Data" />
          <h1>+ 55</h1>
          <p>Pequena Descrição</p>
        </div>
        <div>
          <img src={dataMockupImg} alt="Data" />
          <h1>+ 15,8%</h1>
          <p>Pequena Descrição</p>
        </div>
        <div>
          <img src={dataMockupImg} alt="Data" />
          <h1>3 anos</h1>
          <p>Pequena Descrição</p>
        </div>
      </div>
    </DataContent>
  </>
);

export default Home;
