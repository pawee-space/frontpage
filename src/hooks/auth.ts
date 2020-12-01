import api from '../services/api';

const signIn = async ({ email, password }) => {
  const response = await api.post('authentication', {
    email,
    password,
  });

  const { token } = response.data;

  localStorage.setItem('@PaweeSpace:token', token);
//   localStorage.setItem('@PaweeSpace:user', JSON.stringify(user));
};

export default signIn;
