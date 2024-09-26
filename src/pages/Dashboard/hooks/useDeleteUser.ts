import { useAppDispatch } from '@/hooks/useStore';
import UsersApi from '@/services/Users/UsersApi';
import React, { useCallback, useState } from 'react';

const useDeleteUser = () => {
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [deletedUserId, setDeletedUserId] = useState('');
  const dispatch = useAppDispatch();
  const openDeleteUserModal = (id: string) => {
    setDeletedUserId(id);
    setIsDeleteUserModalOpen(true);
  };
  const closeDeleteUserModal = () => {
    setDeletedUserId('');
    setIsDeleteUserModalOpen(false);
  };

  const deleteUser = useCallback(() => {
    dispatch(UsersApi.deleteUser(deletedUserId))
      .unwrap()
      .then(() => closeDeleteUserModal);
  }, []);

  return {
    isDeleteUserModalOpen,
    openDeleteUserModal,
    closeDeleteUserModal,
    deleteUser,
  };
};

export default useDeleteUser;
