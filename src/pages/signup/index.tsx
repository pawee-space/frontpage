import Head from 'next/head';
import { useCallback } from 'react';
import { Form } from '@unform/web';

import wellcomeImg from '@assets/welcome.svg';
import dinoImg from '@assets/dino.svg';

import { Container, Content, Aside } from '@styles/pages/signup';
import Input from '@components/input';

export default function Dashboard() {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <div>
      <Head>
        <title>Pawee Space - Sign Up</title>
      </Head>
      <Container>
        <Aside>
          <a href="/"><img src={wellcomeImg} alt="Pawee Bem-vindo" /></a>
          <div>
            <img src={dinoImg} alt="Dino" />
            <p>
              Dino é responsável por
              {' '}
              <br />
              {' '}
              cuidar e localizar todos os
              {' '}
              <br />
              {' '}
              animais domésticos da terra.
            </p>
          </div>
        </Aside>
        <Content>
          <Form onSubmit={handleSubmit}>
            <h1>Cadastrar</h1>
            <span>Usuário</span>
            <Input name="user" placeholder="Dino" />

            <span>Email</span>
            <Input name="email" placeholder="dino@pawee.space" />

            <span>Senha</span>
            <Input name="password" placeholder="*******" />

            <span>Repita Senha</span>
            <Input name="passwordConfirm" placeholder="*******" />

            <div>
              <p>Já possui uma conta?</p>
              <a href="login">Entrar</a>
            </div>

            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Container>
    </div>
  );
}
