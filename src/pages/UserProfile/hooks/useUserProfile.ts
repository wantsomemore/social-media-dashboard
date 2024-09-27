import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import UsersApi from '@/services/Users/UsersApi';
import { userSchema } from '@/utils/validation';
import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IEditUserFormPayload } from '../types';

const useUserProfile = () => {
  const [tabValue, setTabValue] = useState(0);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { activeUser } = useAppSelector((state) => state.usersReducer);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const editUser = useCallback(
    (values: IEditUserFormPayload) => {
      id && dispatch(UsersApi.editUser({ data: values, id }));
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues: {
      username: activeUser?.username,
      email: activeUser?.email,
      followers: activeUser?.followers,
      likes: activeUser?.likes,
    },
    validationSchema: userSchema,
    enableReinitialize: true,
    onSubmit: async (values: IEditUserFormPayload, { resetForm }) => {
      editUser(values);
      resetForm();
    },
  });

  useEffect(() => {
    id && dispatch(UsersApi.getUser(id));
  }, []);

  return { activeUser, handleTabChange, tabValue, formik };
};

export default useUserProfile;
