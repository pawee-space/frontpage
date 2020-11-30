import Head from 'next/head';
import { useState } from 'react';

import logoImg from '@assets/logo.svg';
import bellImg from '@assets/bell.svg';
import avatarImg from '@assets/avatar-mockup.svg';
import downArrowImg from '@assets/down-arrow.svg';

import {
  Container, Header,
} from '@styles/pages/home';

import Dashboard from './_dashboard';
import Board from './_board';
import About from './_about';

export default function Home() {
  const [pageToShow, setpageToShow] = useState('dashboard');

  function handleGoToPage(page: string) {
    setpageToShow(page);
  }

  const user = {
    id: 444444,
    isOng: false,
    name: 'cleiton',
  };
  return (
    <div>
      <Head>
        <title>Pawee Space - Dashboard</title>
      </Head>
      <Container>
        <Header windowActive={pageToShow}>
          <img src={logoImg} alt="Pawee" />
          <div>
            <div>
              <button type="button" onClick={() => handleGoToPage('dashboard')} className="dashboard">Início</button>
            </div>
            <div>
              <button type="button" onClick={() => handleGoToPage('board')} className="board">Mural</button>
            </div>
            <div>
              <button type="button" onClick={() => handleGoToPage('about')} className="about">Sobre</button>
            </div>
          </div>

          <div>
            <img src={bellImg} alt="Notificações" />
            <img src={avatarImg} alt={user.name} />
            <img src={downArrowImg} alt="Opções" />
          </div>
        </Header>

        { pageToShow === 'dashboard' ? <Dashboard /> : (pageToShow === 'board' ? <Board /> : <About />)}

      </Container>
    </div>
  );
}
