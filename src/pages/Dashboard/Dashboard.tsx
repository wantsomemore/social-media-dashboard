import { Table, Button, IconButton } from '@mui/material';
import { IUser } from '@/interfaces/IUser';
import { format } from 'date-fns';
import { DAY_FORMAT } from '@/constants/consts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import useDashboard from './hooks/useDashboard';
import AddUserModal from './components/AddUserModal';
import useAddUser from './hooks/useAddUser';
import { FormikProvider } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteUserModal from './components/DeleteUserModal';
import useDeleteUser from './hooks/useDeleteUser';

const Dashboard = () => {
  const { users, handleRowClick } = useDashboard();
  const { openAddUserModal, isAddUserModalOpen, closeAddUserModal, formik } =
    useAddUser();
  const {
    isDeleteUserModalOpen,
    openDeleteUserModal,
    closeDeleteUserModal,
    deleteUser,
  } = useDeleteUser();

  return (
    <div className="container-fluid px-5 py-4 min-vh-100 bg-light">
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Social Media Performance Overview
        </h1>
        <p className="text-muted">
          Track and manage your social media accounts in one place
        </p>
      </div>

      <div className="row justify-content-center justify-content-md-end mb-4">
        <div className="col-12 col-md-auto text-center text-md-end">
          <Button
            variant="contained"
            color="primary"
            onClick={openAddUserModal}
          >
            Add New User
          </Button>
        </div>
      </div>

      <div className="table-responsive shadow-sm rounded bg-white">
        <Table
          className="table table-striped table-hover"
          style={{ minWidth: '600px' }}
        >
          <thead className="bg-primary text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Followers</th>
              <th>Engagement Rate</th>
              <th>Likes</th>
              <th>Posts</th>
              <th>Comments</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => (
              <tr
                key={user.id}
                onClick={handleRowClick(user.id)}
                className="cursor-pointer"
              >
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.followers}</td>
                <td>{user.engagementRate}%</td>
                <td>{user.likes}</td>
                <td>{user.posts.length}</td>
                <td>{user.comments.length}</td>
                <td>{format(new Date(user.createdAt), DAY_FORMAT)}</td>
                <td>
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDeleteUserModal(user.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <FormikProvider value={formik}>
        <AddUserModal
          open={isAddUserModalOpen}
          handleClose={closeAddUserModal}
        />
      </FormikProvider>
      <DeleteUserModal
        open={isDeleteUserModalOpen}
        handleClose={closeDeleteUserModal}
        handleSubmit={deleteUser}
      />
    </div>
  );
};

export default Dashboard;
