import { ProfileContainer, HeaderContent, ProfilePostsContainer } from '../../styles/pages/home';

import Post from '../../components/Post';

const Profile = () => (
  <ProfileContainer>
    <HeaderContent>
      <div className="background" />
      <div className="info">
        <div className="avatar" />
        <span>João Carlos</span>
      </div>
    </HeaderContent>
    <ProfilePostsContainer>
      <h2>Minhas Postagens</h2>
      <Post />
    </ProfilePostsContainer>
  </ProfileContainer>
);

export default Profile;
