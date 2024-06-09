import axios from 'axios';

const API_URL = process.env.REACT_APP_NODE_ENV=='Development' ?  process.env.REACT_APP_API_URL_DEV  :  process.env.REACT_APP_API_URL;
export async function getSettings(authorization) {    
    const headers = {authorization}
    const response = await axios.get(`${API_URL}/settings`,{headers} );
    return response.data;
}

