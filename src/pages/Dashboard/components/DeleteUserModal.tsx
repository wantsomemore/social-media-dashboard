import { memo } from 'react';
import { Modal, Button } from '@mui/material';
import { IDeleteUserModalProps } from '../types';

const DeleteUserModal = ({
  open,
  handleClose,
  handleSubmit,
}: IDeleteUserModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-user-modal"
      aria-describedby="delete-user-description"
    >
      <div
        className="p-5 bg-white rounded shadow-lg mx-auto mt-10"
        style={{ maxWidth: '500px' }}
      >
        <h2 className="text-xl mb-4 font-bold">Delete New User</h2>
        <p className="text-m mb-4">
          Are you sure you want to delete this user?
        </p>
        <div className="flex gap-4">
          <Button
            variant="outlined"
            color="info"
            fullWidth
            className="mt-4"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
            onClick={handleSubmit}
          >
            Delete User
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(DeleteUserModal);
