import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

interface IPost {
   user: string;
   content: string;
   postId: string;
}

const Post: React.FC<IPost> = ({ user, content, postId }) => (
  <Container>
    <div className="header">
      <div>
        <div className="avatar" />
        <div>
          <span>{user}</span>
          <span>Há 2 dias</span>
        </div>
      </div>
      <FiMoreHorizontal />
    </div>
    {/* <div className="image" /> */}
    <div className="bio">
      <p>{content}</p>
      <a href={`/post/${postId}`}>Ver tudo</a>
    </div>
  </Container>
);

export default Post;
