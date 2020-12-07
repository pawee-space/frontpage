import api from '../services/api';

const signIn = async ({ email, password }) => {
  try {
    const response = await api.post('authentication', {
      email,
      password,
    });

    const { name, token } = response.data;

    localStorage.setItem('@PaweeSpace:user', JSON.stringify(name));
    localStorage.setItem('@PaweeSpace:token', token);
  } catch (error) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    }
  }
};

export const signUp = async ({ name, email, password }) => {
  try {
    const response = await api.post('user/register', {
      name,
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@PaweeSpace:user', JSON.stringify(user.name));
    localStorage.setItem('@PaweeSpace:token', token);
  } catch (error) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    }
  }
};

export default signIn;
