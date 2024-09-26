import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UsersApi from '@/services/Users/UsersApi';

import { usersReducerName } from './action-types';
import { IUser } from '@/interfaces/IUser';

export interface IUsersState {
  users: IUser[];
  activeUser: IUser | null;
  loading: boolean;
}

export const initialState: IUsersState = {
  users: [],
  activeUser: null,
  loading: false,
};

export const usersSlice = createSlice({
  name: usersReducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UsersApi.getUsers.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      UsersApi.getUsers.fulfilled.type,
      (state, { payload }: PayloadAction<IUser[]>) => {
        state.users = payload;
        state.loading = false;
      }
    );
    builder.addCase(UsersApi.getUsers.rejected.type, (state) => {
      state.loading = false;
    });

    builder.addCase(UsersApi.getUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      UsersApi.getUser.fulfilled.type,
      (state, { payload }: PayloadAction<IUser>) => {
        state.activeUser = payload;
        state.loading = false;
      }
    );
    builder.addCase(UsersApi.getUser.rejected.type, (state) => {
      state.loading = false;
    });

    builder.addCase(UsersApi.addUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      UsersApi.addUser.fulfilled.type,
      (state, { payload }: PayloadAction<IUser>) => {
        state.users.push(payload);
        state.loading = false;
      }
    );
    builder.addCase(UsersApi.addUser.rejected.type, (state) => {
      state.loading = false;
    });

    builder.addCase(UsersApi.deleteUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      UsersApi.deleteUser.fulfilled.type,
      (state, { payload }: PayloadAction<IUser>) => {
        const userIdx = state.users.findIndex((user) => user.id === payload.id);
        state.users.splice(userIdx, 1);
        state.loading = false;
      }
    );
    builder.addCase(UsersApi.deleteUser.rejected.type, (state) => {
      state.loading = false;
    });

    builder.addCase(UsersApi.editUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      UsersApi.editUser.fulfilled.type,
      (state, { payload }: PayloadAction<IUser>) => {
        const userIdx = state.users.findIndex((user) => user.id === payload.id);
        state.users.splice(userIdx, 1, payload);
        state.activeUser = payload;
        state.loading = false;
      }
    );
    builder.addCase(UsersApi.editUser.rejected.type, (state) => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;

export const usersActions = usersSlice.actions;
