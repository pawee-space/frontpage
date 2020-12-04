import Head from 'next/head';
import { useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import wellcomeImg from '@assets/welcome.svg';
import dinoImg from '@assets/dino.svg';

import { Container, Content, Aside } from '@styles/pages/login';
import Input from '@components/input';
import signIn from '../../hooks/auth';

interface SignInFormData {
   email: string;
   password: string;
}

export default function Dashboard() {
  const router = useRouter();

  const [passwordIsShown, setpasswordIsShown] = useState(false);

  const handleShowPassword = () => {
    setpasswordIsShown(!passwordIsShown);
  };

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email required')
          .email('Insert a valid email'),
        password: Yup.string().required('Password required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // sign in
      signIn(data);

      router.push('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // const errors = getValidationErrors(error);

        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Pawee Space - Login</title>
      </Head>
      <Container>
        <Aside>
          <a href="/"><img src={wellcomeImg} alt="Pawee Bem-vindo" /></a>
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
            <Input
              name="password"
              type={passwordIsShown ? 'text' : 'password'}
              icon={passwordIsShown ? FiEye : FiEyeOff}
              placeholder="*******"
              iconAction={handleShowPassword}
            />

            <div>
              <input className="checkbox" type="checkbox" id="stayLoggedIn" name="stayLoggedIn" value="Bike" />
              <p>Manter conectado</p>
              <a href="forgot">Esqueceu sua senha?</a>
            </div>

            <div className="bottom">
              <button type="submit">Entrar</button>
              <a href="signup">Cadastrar-se</a>
            </div>
          </Form>
        </Content>
      </Container>
    </div>
  );
}
