import { Container } from '@styles/pages/404';

import NotFoundImg from '@assets/404.svg';

const NotFound = () => (
  <Container>
    <img src={NotFoundImg} alt="Dino" />
  </Container>
);

export default NotFound;
