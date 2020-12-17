import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Post from '@components/Post';
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
        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            user={name}
            content={post.content}
          />
        ))}
      </ProfilePostsContainer>
    </ProfileContainer>
  </Container>
);

export default Profile;

export const getServerSideProps: GetServerSideProps<IUser> = async (context) => {
  const { userId } = context.query;
  const userResponse = await api.get(`/user/${userId}`);
  const { name, username } = userResponse.data;
  const postsResponse = await api.get(`/post/all/${userId}`);
  const posts = postsResponse.data;

  return {
    props: {
      name,
      username,
      posts,
    },
  };
};
