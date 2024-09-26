import { IAddUserFormPayload, IFormikField } from '@/pages/Dashboard/types';
import React, { memo } from 'react';
import {
  Formik,
  Form,
  Field,
  FormikProps,
  FormikProvider,
  useFormikContext,
} from 'formik';
import { TextField, Button } from '@mui/material';
import { IEditUserFormPayload } from '../types';

const EditUserForm = () => {
  const formik = useFormikContext<IEditUserFormPayload>();
  console.log(formik);
  return (
    <div className="mx-auto  mt-4 lg:p-5 p-3 lg:min-w-2xl lg:w-2/3 sm:w-full">
      <h2 className="text-2xl mb-4 text-center">Edit User Information</h2>
      <Form className="w-full">
        <div className="mb-3">
          <Field name="username">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                value={formik.values.username || ''}
                margin="normal"
                error={Boolean(
                  formik.touched.username && formik.errors.username
                )}
                helperText={formik.touched.username && formik.errors.username}
              />
            )}
          </Field>
        </div>

        <div className="mb-4">
          <Field name="email">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                value={formik.values.email || ''}
                fullWidth
                margin="normal"
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            )}
          </Field>
        </div>

        <div className="mb-3">
          <Field name="followers">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Followers"
                type="number"
                value={formik.values.followers || ''}
                fullWidth
                margin="normal"
                error={Boolean(
                  formik.touched.followers && formik.errors.followers
                )}
                helperText={formik.touched.followers && formik.errors.followers}
              />
            )}
          </Field>
        </div>

        <div className="mb-3">
          <Field name="likes">
            {({ field }: IFormikField) => (
              <TextField
                {...field}
                label="Likes"
                type="number"
                value={formik.values.likes || ''}
                fullWidth
                margin="normal"
                error={Boolean(formik.touched.likes && formik.errors.likes)}
                helperText={formik.touched.likes && formik.errors.likes}
              />
            )}
          </Field>
        </div>

        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-3"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Update User
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default memo(EditUserForm);
