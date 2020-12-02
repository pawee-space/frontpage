import React from 'react';
import { Container } from './styles';

interface CarouselProps {
  width: string
  height: string
  image: string
  url: string
  name: string
  bio: string
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  image,
  url,
  name,
  bio,
}) => (
  <Container width={width} height={height} bg={image}>
    <div id="card">
      <h1>{name}</h1>
      <p>{bio}</p>
      <a href={url}>Ver Perfil</a>
    </div>
    <div id="background" />
  </Container>
);

export default Carousel;
