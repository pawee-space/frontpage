import React from 'react';
import { useTransition } from 'react-spring';
import { Container, Fade } from './styles';

interface CarouselProps {
  width: string
  height: string
  image: string
  url: string
  name: string
  bio: string
  index: number
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  image,
  url,
  name,
  bio,
  index,
}) => {
  const transitions = useTransition([index], (item: number) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Container width={width} height={height}>
      <div id="card">
        <h1>{name}</h1>
        <p>{bio}</p>
        <a href={url}>Ver Perfil</a>
      </div>
      {transitions.map(({ item, key, props }) => (
        <Fade key={key} bg={image} style={props} />
      ))}
    </Container>
  );
};

export default Carousel;
