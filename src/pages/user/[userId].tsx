import Post from '@components/Post';
import CreatePost from '@components/CreatePost';
import {
  Container, ProfileContainer, HeaderContent, ProfilePostsContainer,
} from '@styles/pages/user';
import { GetServerSideProps } from 'next';
import avatar from '@assets/provisory-avatar-img.png';
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
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <span>
            {name}
          </span>
        </div>
      </HeaderContent>
      <ProfilePostsContainer>
        <h2>Minhas Postagens</h2>
        <CreatePost avatar={avatar} />
        {posts ? posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            user={name}
            avatar={avatar}
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
