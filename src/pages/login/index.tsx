import Head from 'next/head';
import { useCallback } from 'react';
import { Form } from '@unform/web';

import wellcomeImg from '../../assets/welcome.svg';
import dinoImg from '../../assets/dino.svg';

import { Container, Content, Aside } from '../../styles/pages/login';
import { Input } from '../../components/input';

export default function Dashboard() {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <div>
      <Head>
        <title>Pawee Space - Login</title>
      </Head>
      <Container>
        <Aside>
          <img src={wellcomeImg} alt="Pawee Bem-vindo" />
          <div>
            <img src={dinoImg} alt="Dino" />
            <p>O dino é o protetor dos animais da pawee.</p>
          </div>
        </Aside>
        <Content>
          <Form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <span>Email ou usuário</span>
            <Input name="email" placeholder="dino@pawee.space" />

            <span>Senha</span>
            <Input name="email" placeholder="*******" />

            <div>
              <input type="checkbox" id="stayLoggedIn" name="stayLoggedIn" value="Bike" />
              <label htmlFor="stayLoggedIn">Manter conectado</label>
              <a href="https://a.com">Esqueceu sua senha?</a>
            </div>

            <div>
              <button type="submit">Entrar</button>
              <a href="signup">Cadastrar-se</a>
            </div>
          </Form>
        </Content>
      </Container>
    </div>
  );
}
