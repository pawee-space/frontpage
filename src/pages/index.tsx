import Head from 'next/head';
import { Link } from 'react-scroll';
import Lottie from 'react-lottie';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

import logoImg from '@assets/logo.svg';
import logoAlphaImg from '@assets/logo-alpha.svg';
import dinoImg from '@assets/dino-entire.svg';
import facebookImg from '@assets/facebook.svg';
import githubImg from '@assets/github.svg';
import twitterImg from '@assets/twitter.svg';
import instagramImg from '@assets/instagram.svg';
import dataImg1 from '@assets/data-image-1.svg';
import dataImg2 from '@assets/data-image-2.svg';
import dataImg3 from '@assets/data-image-3.svg';
import featureImage1 from '@assets/feature-image-1.svg';
import featureImage2 from '@assets/feature-image-2.svg';
import featureImage3 from '@assets/feature-image-3.svg';

import {
  HomeContainer,
  Header,
  HeaderMobile,
  ButtonsContainer,
  Main,
  ImageContainer,
  DataSection,
  FeatureSection,
  FaqSection,
  Question,
  Footer,
  BackToTop,
  BackToTopContainer,
} from '@styles/pages/welcome';

import Button from '../components/Button';

import buldogAnimation from '../assets/lottie/french-buldog.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: buldogAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Home = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const mock = [
    {
      id: 1,
      author: 'Arthur',
      message: 'Como faço para cadastrar minha Ong?',
    },
    {
      id: 2,
      author: 'Victória',
      message: 'Como doar para uma organização?',
    },
    {
      id: 3,
      author: 'Victória',
      message: 'O que é necessário para adotar um pet?',
    },
    {
      id: 4,
      author: 'Arthur',
      message: 'Posso cadastrar um animal mesmo não sendo uma Ong?',
    },
  ];

  return (
    <>
      <Head>
        <title>Pawee Space</title>
      </Head>
      <HomeContainer id="top">
        <Header>
          <img src={logoImg} alt="Pawee" />
          <div>
            <Button isPrimary href="login">Entrar</Button>
            <Button isPrimary={false} href="signup">Cadastrar-se</Button>
          </div>
        </Header>

        <HeaderMobile>
          <img src={dinoImg} alt="Dino" />
          <img src={logoImg} alt="Pawee" />
        </HeaderMobile>

        <Main>
          <div>
            <h1>Salve, apoie e adote.</h1>
            <p>
              A Pawee oferece visibilidade para
              <br />
              {' '}
              Ong’s e abrigos de animais, faça parte!
            </p>
            <Button isPrimary href="signup">
              Fazer Parte
            </Button>
          </div>
        </Main>
        <ImageContainer>
          <Lottie
            options={defaultOptions}
            height={700}
            width={700}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </ImageContainer>
      </HomeContainer>
      <DataSection>
        <h1>Um aplicativo, um novo jeito de ajudar!</h1>
        <p>Dados que motivam a Pawee a lutar pelas Ong’s e animais.</p>

        <div>
          <div>
            <img src={dataImg1} alt="Data" />
            <h1>+482%</h1>
            <p>Denúncias de maus tratos em 2020.</p>
            <span>SaferNet Brasil.</span>
          </div>
          <div>
            <img src={dataImg2} alt="Data" />
            <h1>90%</h1>
            <p>De queda nas arrecadações.</p>
            <span>Viviane Lima, Lar Tintin.</span>
          </div>
          <div>
            <img src={dataImg3} alt="Data" />
            <h1>+40%</h1>
            <p>Procura de devoluções de animais.</p>
            <span>Vicente Neto, Ong Cão sem Dono.</span>
          </div>
        </div>
      </DataSection>
      <BackToTopContainer>
        <FeatureSection>
          <h1>São dezenas de recursos e ferramentas.</h1>
          <p>Para aproveitar ainda mais, faça parte dessa rede.</p>
          <Button isPrimary href="/login">Fazer Parte</Button>

          <div>
            <div>
              <img src={featureImage1} alt="Data" />
              <h1>Mural</h1>
              <p>Veja todas as postagens das Ong’s em um local só!</p>
            </div>
            <div>
              <img src={featureImage2} alt="Data" />
              <h1>Perfis</h1>
              <p>Veja fotos, informações e muito mais! </p>
            </div>
            <div>
              <img src={featureImage3} alt="Data" />
              <h1>Segurança</h1>
              <p>
                Mais segurança no processo de doação.
              </p>
            </div>
          </div>
        </FeatureSection>
        <FaqSection>
          <h1>Perguntas Frequentes</h1>
          <p>Tire alguma dúvidas com o nosso FAQ.</p>

          {mock.map((question) => (
            <Question key={question.id}>
              <a href={`https://pawee.space/faq/${question.id}`}>{question.message}</a>
            </Question>
          ))}
        </FaqSection>

        <BackToTop to="top" smooth>
          <FiChevronUp />
        </BackToTop>
      </BackToTopContainer>
      <Footer>
        <Link to="top" smooth className="footer-logo">
          <img src={logoAlphaImg} alt="Pawee" />
        </Link>

        <a href="https://pawee.space/about">Sobre</a>
        <a href="https://pawee.space/contact">Contato</a>
        <a href="https://pawee.space/faq">FAQ</a>
        <div className="footer-social">
          <a
            href="https://facebook.com/paweespace"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebookImg} alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/PaweeSpace/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitterImg} alt="Twitter" />
          </a>
          <a
            href="https://instagram.com/PaweeSpace/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagramImg} alt="Instagram" />
          </a>
          <a
            href="https://github.com/Pawee-Space/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={githubImg} alt="Github" />
          </a>
        </div>
        <span className="footer-copyright">copyright 2020 © Pawee.Space</span>
      </Footer>
    </>
  );
};

export default Home;
