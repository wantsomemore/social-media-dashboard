import { memo } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { Form, Field, useFormikContext } from 'formik';
import {
  IAddUserFormPayload,
  IAddUserModalProps,
  IFormikField,
} from '../types';

const AddUserModal = ({ open, handleClose }: IAddUserModalProps) => {
  const formik = useFormikContext<IAddUserFormPayload>();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-user-modal"
      aria-describedby="add-user-description"
    >
      <div
        className="p-5 bg-white rounded shadow-lg mx-auto mt-10"
        style={{ maxWidth: '500px' }}
      >
        <h2 className="text-xl mb-4 font-bold">Add New User</h2>
        <Form>
          <Field name="username">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                error={Boolean(
                  formik.touched.username && formik.errors.username
                )}
                helperText={formik.touched.username && formik.errors.username}
              />
            )}
          </Field>
          <Field name="email">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                margin="normal"
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            )}
          </Field>
          <Field name="followers">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Followers"
                type="number"
                fullWidth
                margin="normal"
                error={Boolean(
                  formik.touched.followers && formik.errors.followers
                )}
                helperText={formik.touched.followers && formik.errors.followers}
              />
            )}
          </Field>
          <Field name="likes">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Likes"
                type="number"
                fullWidth
                margin="normal"
                error={Boolean(formik.touched.likes && formik.errors.likes)}
                helperText={formik.touched.likes && formik.errors.likes}
              />
            )}
          </Field>
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
            >
              Add User
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default memo(AddUserModal);
