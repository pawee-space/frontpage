import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

const Post: React.FC = () => (
  <Container>
    <div className="header">
      <div>
        <div className="avatar" />
        <div>
          <span>Nome da Ong</span>
          <span>Há 2 dias</span>
        </div>
      </div>
      <FiMoreHorizontal />
    </div>
    <div className="image" />
    <div className="bio">
      <p>Pássaros são resgatados e cuidados, os silvestres foram soltos na naturez e alguns...</p>
      <a href="/post/1293192">Ver tudo</a>
    </div>
  </Container>
);

export default Post;
