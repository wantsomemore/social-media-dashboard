import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERS_ACTION_TYPES } from '@/store/reducers/Users/action-types';

import { ENDPOINTS } from '@/constants/endpoints';
import axios from 'axios';
import { IUser } from '@/interfaces/IUser';
import { IAddUserFormPayload } from '@/pages/Dashboard/types';
import { IEditUserFormPayload } from '@/pages/UserProfile/types';

class UsersApi {
  static getUsers = createAsyncThunk(
    USERS_ACTION_TYPES.GET_USERS,
    async (_, thunkApi) => {
      try {
        const response = await axios.get(ENDPOINTS.USERS.GET_USERS);
        return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  static getUser = createAsyncThunk(
    USERS_ACTION_TYPES.GET_USER,
    async (id: string, thunkApi) => {
      try {
        const response = await axios.get(ENDPOINTS.USERS.GET_USER(id));
        return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  static addUser = createAsyncThunk(
    USERS_ACTION_TYPES.ADD_USER,
    async (data: IAddUserFormPayload, thunkApi) => {
      try {
        const response = await axios.post(ENDPOINTS.USERS.ADD_USER, data);
        return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  static deleteUser = createAsyncThunk(
    USERS_ACTION_TYPES.DELETE_USER,
    async (id: string, thunkApi) => {
      try {
        const response = await axios.delete(ENDPOINTS.USERS.DELETE_USER(id));
        return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  static editUser = createAsyncThunk(
    USERS_ACTION_TYPES.EDIT_USER,
    async (user: { data: IEditUserFormPayload; id: string }, thunkApi) => {
      try {
        const { data, id } = user;
        const response = await axios.put(ENDPOINTS.USERS.EDIT_USER(id), data);
        return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );
}
export default UsersApi;
