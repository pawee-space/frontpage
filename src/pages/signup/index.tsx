import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import welcomeImg from '@assets/welcome.svg';
import dinoImg from '@assets/dino.svg';

import { Container, Content, Aside } from '@styles/pages/signup';
import Input from '@components/input';
import Submit from '@components/Submit';
import { signUp } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErros';

interface SignUpFormData {
   name: string;
   email: string;
   password: string;
   passwordConfirm: string;
}

export default function Dashboard() {
  const { addToast } = useToast();
  const router = useRouter();
  const [signInButtonIsDisabled, setSignInButtonIsDisabled] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    setSignInButtonIsDisabled(true);
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Insira um nome'),
        email: Yup.string()
          .required('Insira um email')
          .email('Insira um email válido'),
        password: Yup.string()
          .required('Insira uma senha')
          .min(8, 'Sua senha deve ter no mínimo 8 caracteres'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signUp(data);

      router.push('/home');
    } catch (error) {
      setSignInButtonIsDisabled(false);
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        for (const [key, value] of Object.entries(errors)) {
          addToast({
            type: 'error',
            title: 'Oops',
            description: value,
          });
        }

        return;
      }

      if (error.message === '409') {
        addToast({
          type: 'error',
          title: 'Oxente?',
          description: 'Esse email já está em uso',
        });

        return;
      }

      addToast({
        type: 'error',
        title: 'Pani no sistema!',
        description: 'Alguém me desconfigurou',
      });
    }
  }, [addToast]);

  const handleShowPassword = () => {
    setPasswordIsShown(!passwordIsShown);
  };

  return (
    <div>
      <Head>
        <title>Pawee Space - Sign Up</title>
      </Head>
      <Container>
        <Aside>
          <a href="/"><img src={welcomeImg} alt="Pawee Bem-vindo" /></a>
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
            <span>Name</span>
            <Input name="name" placeholder="Dino" />

            <span>Email</span>
            <Input name="email" placeholder="dino@pawee.space" />

            <span>Senha</span>
            <Input
              name="password"
              type={passwordIsShown ? 'text' : 'password'}
              icon={passwordIsShown ? FiEye : FiEyeOff}
              placeholder={!passwordIsShown ? '*******' : 'senha'}
              iconAction={handleShowPassword}
            />

            <span>Repita Senha</span>
            <Input
              name="passwordConfirm"
              type={passwordIsShown ? 'text' : 'password'}
              icon={passwordIsShown ? FiEye : FiEyeOff}
              placeholder={!passwordIsShown ? '*******' : 'senha'}
              iconAction={handleShowPassword}
            />

            <div>
              <p>Já possui uma conta?</p>
              <a href="login">Entrar</a>
            </div>

            <Submit isDisabled={signInButtonIsDisabled} isSecondary>Cadastrar</Submit>
          </Form>
        </Content>
      </Container>
    </div>
  );
}
