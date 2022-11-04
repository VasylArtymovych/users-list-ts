import axios from 'axios';

const host = 'http://localhost:3377/api/users';

axios.defaults.baseURL = host;

export const createUserRoute = `/create`;
export const updateUserRoute = `/update`;
export const deleteUserRoute = `/delete`;
