import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '../styles/pages/notAuthenticated';
import sadFaceImg from '../assets/sad_face.svg';

const NotAuthenticated = () => {
  const [timeToRedirect, setTimeToRedirect] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timeToRedirect === 0) {
      router.push('/login');
      return;
    }
    setTimeout(() => {
      setTimeToRedirect(timeToRedirect - 1);
    }, 1000);
  }, [timeToRedirect, setTimeToRedirect, router]);

  return (
    <Container>
      <img src={sadFaceImg} alt="Rosto Triste" />
      <h1>
        Você não está logado,
        <br />
        redirecionando para o login em:
        <br />
        {timeToRedirect}
        s
      </h1>
    </Container>
  );
};

export default NotAuthenticated;
