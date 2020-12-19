import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

interface IPost {
   user: string;
   content: string;
   postId: string;
   avatar: any;
}

const Post: React.FC<IPost> = ({
  user, content, postId, avatar,
}) => (
  <Container>
    <div className="header">
      <div>
        <div className="avatar">
          <img src={avatar} alt={user} />
        </div>
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
