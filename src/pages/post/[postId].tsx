import Post from '@components/Post';
import { GetServerSideProps } from 'next';
import api from '../../services/api';

interface IPost {
   id: string;
   content: string;
   imageUrl?: string;
}

const Profile = ({ id, content }: IPost) => (
  <Post
    postId={id}
    user="Disney"
    content={content}
  />
);

export default Profile;

export const getServerSideProps: GetServerSideProps<IPost> = async (context) => {
  const { postId } = context.query;
  const postResponse = await api.get(`/post/${postId}`);
  const { id, content } = postResponse.data;

  return {
    props: {
      id,
      content,
    },
  };
};
