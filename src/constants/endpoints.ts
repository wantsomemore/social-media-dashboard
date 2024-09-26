import { IUser } from '@/interfaces/IUser';

const url = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  USERS: {
    GET_USERS: `${url}/users`,
    GET_USER: (id: string) => `${url}/users/${id}`,
    EDIT_USER: (id: string) => `${url}/users/${id}`,
    DELETE_USER: (id: string) => `${url}/users/${id}`,
    ADD_USER: `${url}/users`,
  },
};
