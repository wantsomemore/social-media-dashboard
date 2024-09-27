import { useAppDispatch } from '@/hooks/useStore';
import { useState } from 'react';
import { IAddUserFormPayload } from '../types';
import UsersApi from '@/services/Users/UsersApi';
import { useFormik } from 'formik';
import { userSchema } from '@/utils/validation';

const useAddUser = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const openAddUserModal = () => setIsAddUserModalOpen(true);
  const closeAddUserModal = () => setIsAddUserModalOpen(false);

  const addUser = (values: IAddUserFormPayload) => {
    dispatch(UsersApi.addUser(values));
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      followers: null,
      likes: null,
    },
    validationSchema: userSchema,
    onSubmit: async (values: IAddUserFormPayload, { resetForm }) => {
      addUser(values);
      resetForm();
      closeAddUserModal();
    },
  });

  return { isAddUserModalOpen, openAddUserModal, closeAddUserModal, formik };
};

export default useAddUser;
