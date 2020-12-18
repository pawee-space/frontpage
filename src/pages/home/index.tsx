import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FiChevronDown, FiBell } from 'react-icons/fi';
import { useRouter } from 'next/router';
import logoImg from '@assets/logo.svg';
import avatarImg from '@assets/avatar-mockup.svg';
import {
  Container, Header,
} from '@styles/pages/home';
import Dashboard from './_dashboard';
import Board from './_board';
import About from './_about';
import NotAuthenticated from '../_notAuthenticated';

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  // TEMP
  const userId = 'e0a3a2fd-da92-42f2-af2b-09c98a7750ff';

  useEffect(() => {
    const token = localStorage.getItem('@PaweeSpace:token');
    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const [pageToShow, setPageToShow] = useState('dashboard');

  function handleChangePage(page: string) {
    setPageToShow(page);
  }

  function handleGoToPage(page: string) {
    router.push(page);
  }

  let pageToRender;

  if (pageToShow === 'dashboard') {
    pageToRender = <Dashboard />;
  } else if (pageToShow === 'board') {
    pageToRender = <Board />;
  } else if (pageToShow === 'about') {
    pageToRender = <About />;
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
                  <button type="button" onClick={() => handleChangePage('dashboard')} className="dashboard">Início</button>
                </div>
                <div>
                  <button type="button" onClick={() => handleChangePage('board')} className="board">Mural</button>
                </div>
                <div>
                  <button type="button" onClick={() => handleChangePage('about')} className="about">Sobre</button>
                </div>
              </div>

              <div>
                <FiBell />
                <img src={avatarImg} alt={user.name} />
                <FiChevronDown onClick={() => { handleGoToPage(`/user/${userId}`); }} />
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
