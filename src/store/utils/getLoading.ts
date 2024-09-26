import { RootState } from '..';

export const getLoading = (state: RootState) => {
  return state.usersReducer.loading;
};
