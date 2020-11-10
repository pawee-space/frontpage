import Head from 'next/head';

import logoImg from '@assets/logo.svg';
import bellImg from '@assets/bell.svg';
import avatarImg from '@assets/avatar-mockup.svg';
import downArrowImg from '@assets/down-arrow.svg';

import { Slider } from 'pawee-image-slider';

import {
  Container, Header, Main,
} from '@styles/pages/dashboard';

export default function Dashboard() {
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
        <Header>
          <img src={logoImg} alt="Pawee" />
          <div>
            <div>
              <a href="/" className="active">Início</a>
            </div>
            <div>
              <a href="dashboard/home">Mural</a>
            </div>
            <div>
              <a href="dashboard/home">Sobre</a>
            </div>
          </div>

          <div>
            <img src={bellImg} alt="Notificações" />
            <img src={avatarImg} alt={user.name} />
            <img src={downArrowImg} alt="Opções" />
          </div>
        </Header>

        <Main>
          <h1>Titulo Legal</h1>
          <Slider />
        </Main>
      </Container>
    </div>
  );
}
