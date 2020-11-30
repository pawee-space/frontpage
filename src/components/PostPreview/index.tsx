import { FunctionComponent } from 'react';

import { FiUser, FiMapPin, FiClock } from 'react-icons/fi';
import { Container } from './styles';

interface PostPreviewProps {
   title: string;
   description: string;
   link: string;
   image: string;
   ongName: string;
   ongImage: string;
   ongAddress: string;
   postedAt: string;
   [tags: string]: any;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({
  title,
  description,
  link,
  image,
  ongName,
  ongImage,
  ongAddress,
  postedAt,
  tags,
}) => (
  <Container postImage={image} ongImage={ongImage}>
    <div className="left section">
      <div className="ongImage" />
      <div>
        <div>
          <FiUser />
          <span className="ongName">{ongName}</span>
        </div>
        <div>
          <FiMapPin />
          <span>{ongAddress}</span>
        </div>
      </div>
    </div>
    <div className="middle section">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Ver Postagem</a>
    </div>
    <div className="right section">
      <div>
        <FiClock />
        <span>Postado</span>
        <b>{postedAt}</b>
      </div>
      <div className="postImage" />
      <div>
        {tags.map((tag) => <p>{tag}</p>)}
      </div>
    </div>
  </Container>
);

export default PostPreview;
