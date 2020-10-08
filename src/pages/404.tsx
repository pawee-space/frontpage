import NotFoundImg from '../assets/404.svg';

import { Container } from '../styles/pages/404';

const NotFound = () => (
  <Container>
    <img src={NotFoundImg} alt="Dino" />
  </Container>
);

export default NotFound;
