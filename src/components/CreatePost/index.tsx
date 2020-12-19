import React from 'react';
import Button from '@components/Button';
import { useToast } from '@hooks/toast';
import { Container } from './styles';

interface IPost {
   // user: string;
   // content: string;
   // postId: string;
   avatar: any;
}

const CreatePost: React.FC<IPost> = ({ avatar }) => {
  const { addToast } = useToast();

  return (
    <Container>
      <form className="content">
        <div className="avatar">
          <img src={avatar} alt="usuario" />
        </div>
        <input type="text" placeholder="Faça alguma publicação!!" />
      </form>
      <Button
        isPrimary
        onClick={() => addToast({
          type: 'error',
          title: 'Oops',
          description: 'Ainda não é possível criar posts :c',
        })}
      >
        Publicar
      </Button>
      {/* <div className="image" /> */}

    </Container>
  );
};

export default CreatePost;
