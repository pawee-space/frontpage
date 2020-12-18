import Post from '@components/Post';
import CreatePost from '@components/CreatePost';
import {
  Container, ProfileContainer, HeaderContent, ProfilePostsContainer,
} from '@styles/pages/users';
import { GetServerSideProps } from 'next';
import api from '../../services/api';

interface IPost {
   id: string;
   content: string;
   imageUrl?: string;
}

interface IUser {
   name: string;
   username: string;
   posts: IPost[];
}

const Profile = ({ name, posts }: IUser) => (
  <Container>
    <ProfileContainer>
      <HeaderContent>
        <div className="background" />
        <div className="info">
          <div className="avatar" />
          <span>
            {name}
          </span>
        </div>
      </HeaderContent>
      <ProfilePostsContainer>
        <h2>Minhas Postagens</h2>
        <CreatePost />
        {posts ? posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            user={name}
            content={post.content}
          />
        )).reverse() : null}
      </ProfilePostsContainer>
    </ProfileContainer>
  </Container>
);

export default Profile;

export const getServerSideProps: GetServerSideProps<IUser> = async (context) => {
  const { userId } = context.query;
  const userResponse = await api.get(`/user/${userId}`);
  const { name, username } = userResponse.data;
  try {
    const postsResponse = await api.get(`/post/all/${userId}`);
    const posts = postsResponse.data;

    return {
      props: {
        name,
        username,
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        name,
        username,
        posts: null,
      },
    };
  }
};
