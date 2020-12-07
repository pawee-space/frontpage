import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiChevronDown, FiBell, FiDivide } from 'react-icons/fi';

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
import Profile from './_profile';
import NotAuthenticated from '../_notAuthenticated';

interface AuthProps {
   isLogged: boolean;
}

export default function Home() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(10);

  useEffect(() => {
    const token = localStorage.getItem('@PaweeSpace:token');
    console.log(token);
    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const [pageToShow, setpageToShow] = useState('dashboard');

  function handleGoToPage(page) {
    setpageToShow(page);
  }

  let pageToRender;

  if (pageToShow === 'dashboard') {
    pageToRender = <Dashboard />;
  } else if (pageToShow === 'board') {
    pageToRender = <Board />;
  } else if (pageToShow === 'about') {
    pageToRender = <About />;
  } else if (pageToShow === 'profile') {
    pageToRender = <Profile />;
  } else {
    pageToRender = <div />;
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
      {isAuthorized
        ? (
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
                <FiBell />
                <img src={avatarImg} alt={user.name} />
                <FiChevronDown onClick={() => { handleGoToPage('profile'); }} />
              </div>
            </Header>

            { pageToRender }

          </Container>
        )
        : <NotAuthenticated />}
    </div>
  );
}

// Home.getInitialProps = async (ctx: NextPageContext) => {
//   const isLogged = true;

//     const token = localStorage.getItem(
//       '@PaweeSpace:token',
//     );

//     console.log(token);

//     jwt.verify(token, process.env.SECRET, (err, decoded) => {
//       console.log(decoded); // bar
//     });

//   return {
//     props: {
//       isLogged,
//     },
//   };
// };
