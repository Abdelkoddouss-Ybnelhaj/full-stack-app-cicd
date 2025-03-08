import axios from './axios';

const login = (body) => {
  
  const url = '/auth/login';
  return axios.post(url, body).then((response) => {
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  });
};

const signup = (body) => {
  const url = '/auth/signup';
  return axios.post(url, body).then((response) => response.data);
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  const user = localStorage.getItem('user');  // Get the user from localStorage
  
  // Check if the user exists and is a non-empty string
  if (user && user !== 'undefined' && user !== 'null') {
    try {
      return JSON.parse(user);  // Parse the valid JSON string
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;  // Return null if JSON is invalid
    }
  }
  return null;  // Return null if user is not found or is invalid
}


const AuthService = {
  login,
  signup,
  logout,
  getCurrentUser,
};

export default AuthService;
