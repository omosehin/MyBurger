import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-burger-92.firebaseio.com/"
});

export default instance;