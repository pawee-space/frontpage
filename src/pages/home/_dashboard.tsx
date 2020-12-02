import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

import {
  Main, SlideContainer, OngsHeader,
} from '@styles/pages/home';

import OngBillBoard from '../../components/OngBillBoard';

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
  const [indexToOng, setOngToShow] = useState(0);

  function handleShowNextOng() {
    if (indexToOng === data.length - 1) {
      setOngToShow(0);
      return;
    }

    setOngToShow(indexToOng + 1);
  }
  function handleShowPreviousOng() {
    if (indexToOng === 0) {
      setOngToShow(data.length - 1);
      return;
    }

    setOngToShow(indexToOng - 1);
  }

  return (
    <>
      <Main>
        <OngsHeader>
          <h1> Ong&apos;s Criadas</h1>
          <div>
            <button type="button" onClick={handleShowPreviousOng}><FiChevronLeft /></button>
            <button type="button" onClick={handleShowNextOng}><FiChevronRight /></button>
          </div>
        </OngsHeader>
        <OngBillBoard
          name={data[indexToOng].name}
          bio={data[indexToOng].bio}
          width="100%"
          height="576px"
          url={data[indexToOng].url}
          image={data[indexToOng].image}
        />
      </Main>
    </>
  );
}
