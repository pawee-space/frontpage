import React from 'react';
import Button from '@components/Button';
import { Container } from './styles';

interface IPost {
   user: string;
   content: string;
   postId: string;
}

const CreatePost: React.FC = () => (
  <Container>
    <form className="content">
      <div className="avatar" />
      <input type="text" placeholder="Faça alguma publicação!!" />
    </form>
    <Button isPrimary>
      Publicar
    </Button>
    {/* <div className="image" /> */}

  </Container>
);

export default CreatePost;
