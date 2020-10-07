import { Container } from './styles';

import slideArrowLeft from '../../assets/slide-left.svg';
import slideArrowRight from '../../assets/slide-right.svg';

const background = 'https://user-images.githubusercontent.com/54639269/95382485-18568b00-08c0-11eb-956c-ed6305fb3dee.png';

export default function SlideContainer() {
  const ong = {
    id: 663399,
    isOng: true,
    name: 'Nome da Ong',
    bio: 'Descrição da Ong e chamada para conhecer o perfil.',
  };
  return (
    <Container>
      <img src={background} alt="Background" />
      <img className="arrowLeft" src={slideArrowLeft} alt="Próxima Imagem" />
      <img className="arrowRight" src={slideArrowRight} alt="Imagem Anterior" />
      <div>
        <h1>{ong.name}</h1>
        <p>{ong.bio}</p>
        <a href={`ong/${ong.id}`}>Ver Perfil</a>
      </div>
    </Container>
  );
}
