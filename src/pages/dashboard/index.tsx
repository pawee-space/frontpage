import Head from 'next/head';

import logoImg from '@assets/logo.svg';
import bellImg from '@assets/bell.svg';
import avatarImg from '@assets/avatar-mockup.svg';
import downArrowImg from '@assets/down-arrow.svg';

import { Slider } from 'pawee-image-slider';

import {
  Container, Header, Main, SlideContainer,
} from '@styles/pages/dashboard';

const data = [
  {
    id: 1,
    image:
       'https://images.unsplash.com/photo-1580656519531-17669bf09590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Amidogo',
    bio: 'ONG amiga de todos animaiszinhos e amante de cachorros',
    url: 'ong/amidogo',
  },
  {
    id: 2,
    image:
       'https://images.unsplash.com/photo-1604942980447-8155eab1b2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'BIRBRIB',
    bio: 'Acolhedora de animais de rua e dando asas a eles',
    url: 'ong/birbrib',
  },
  {
    id: 3,
    image:
       'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'PaweeFanbase',
    bio: 'FanBase da Pawee com localização fisica para abrigar animais que nem Batman',
    url: 'ong/paweefanbase',
  },
  {
    id: 4,
    image:
       'https://images.unsplash.com/photo-1583333213031-d3dda3505d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Cansei dessa Vida',
    bio: 'E agora eu vou parar de ajudar os animais do meu meio pra ajudar os animais de rua',
    url: 'ong/cansei-dessa-vida',
  },
];

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
          <SlideContainer>
            <Slider data={data} width="1056px" height="576px" />
          </SlideContainer>
        </Main>
      </Container>
    </div>
  );
}
