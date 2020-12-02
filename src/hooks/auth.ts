import api from '../services/api';

const signIn = async ({ email, password }) => {
  const response = await api.post('authentication', {
    email,
    password,
  });

  const { name } = response.data;

  console.log('logged as ', name);

  localStorage.setItem('@PaweeSpace:user', JSON.stringify(name));
};

export default signIn;
