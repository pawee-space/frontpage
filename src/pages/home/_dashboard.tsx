import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useCallback } from 'react';

import {
  Main, PostContainer, SlideHeader, PostCard,
} from '@styles/pages/home';

import OngBillBoard from '../../components/OngBillBoard';
import Button from '../../components/Button';

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

const mod = (n, m) => ((n % m) + m) % m;

export default function Dashboard() {
  const [indexToOng, setOngToShow] = useState(0);

  const handleShowPreviousOng = useCallback(() => {
    setOngToShow((state) => mod(state - 1, data.length));
  }, [setOngToShow]);

  const handleShowNextOng = useCallback(() => {
    setOngToShow((state) => mod(state + 1, data.length));
  }, [setOngToShow]);

  return (
    <>
      <Main>
        <SlideHeader>
          <h1> Ong&apos;s Criadas</h1>
          <div>
            <button type="button" onClick={handleShowPreviousOng}><FiChevronLeft /></button>
            <button type="button" onClick={handleShowNextOng}><FiChevronRight /></button>
          </div>
        </SlideHeader>
        <OngBillBoard
          name={data[indexToOng].name}
          bio={data[indexToOng].bio}
          width="100%"
          height="576px"
          url={data[indexToOng].url}
          image={data[indexToOng].image}
          index={indexToOng}
        />
        <SlideHeader>
          <h1> Postagens Recentes</h1>
          <div>
            <button type="button" onClick={handleShowPreviousOng}><FiChevronLeft /></button>
            <button type="button" onClick={handleShowNextOng}><FiChevronRight /></button>
          </div>
        </SlideHeader>
        <PostContainer>
          <PostCard background="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            <div className="background" />
            <h2>Tobi foi adotado</h2>
            <p>O gato mais carinhoso da Ong Nome Fictício foi adotado por uma famlia carinhosa. Saiba mais sobre o pefil da Ong e conheça mais gatos carinhosos como o Tobi. </p>
            <Button isPrimary>Saiba mais</Button>
          </PostCard>
          <PostCard background="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80">
            <div className="background" />
            <h2>Gato encontrado </h2>
            <p>O gato encontrado na Avenida Fictícia está sendo cuidado pela Ong Nome Fictício, apesar de assustado, Mark está se recuperando muito bem, logo estará disponível para uma família gentil. Saiba mais sobre o Mark.</p>
            <Button isPrimary>Saiba mais</Button>
          </PostCard>
        </PostContainer>
      </Main>
    </>
  );
}
