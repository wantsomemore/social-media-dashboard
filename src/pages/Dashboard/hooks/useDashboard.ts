import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import UsersApi from '@/services/Users/UsersApi';
import { userSchema } from '@/utils/validation';
import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAddUserFormPayload } from '../types';

const useDashboard = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersReducer);

  const openAddUserModal = () => setIsAddUserModalOpen(true);
  const closeAddUserModal = () => setIsAddUserModalOpen(false);

  useEffect(() => {
    dispatch(UsersApi.getUsers());
  }, []);

  const navigate = useNavigate();

  const handleRowClick = (id: string) => () => {
    navigate(`/users/${id}`, { state: { id } });
  };

  const addUser = useCallback((values: IAddUserFormPayload) => {
    dispatch(UsersApi.addUser(values));
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      followers: 0,
      likes: 0,
    },
    validationSchema: userSchema,
    onSubmit: async (values: IAddUserFormPayload, { resetForm }) => {
      addUser(values);
      resetForm();
      closeAddUserModal;
    },
  });

  return {
    users,
    handleRowClick,
    openAddUserModal,
    isAddUserModalOpen,
    closeAddUserModal,
    formik,
  };
};

export default useDashboard;
