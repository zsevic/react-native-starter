import axios from 'axios';
import {API_BASE_URL} from '../constants';

axios.defaults.baseURL = API_BASE_URL;

export default axios;
