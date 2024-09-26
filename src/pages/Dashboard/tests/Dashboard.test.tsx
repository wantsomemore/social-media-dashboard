import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';
import useDashboard from '../hooks/useDashboard';
import useAddUser from '../hooks/useAddUser';
import useDeleteUser from '../hooks/useDeleteUser';

// Mock hooks
jest.mock('./hooks/useDashboard');
jest.mock('./hooks/useAddUser');
jest.mock('./hooks/useDeleteUser');

// Sample mock data for users
const mockUsers = [
  {
    id: '1',
    username: 'John Doe',
    followers: 1000,
    engagementRate: 10,
    likes: 200,
    createdAt: '2023-09-12T00:00:00.000Z',
  },
  {
    id: '2',
    username: 'Jane Smith',
    followers: 2000,
    engagementRate: 15,
    likes: 300,
    createdAt: '2023-08-15T00:00:00.000Z',
  },
];

describe('Dashboard component', () => {
  beforeEach(() => {
    // Mock the useDashboard hook
    (useDashboard as jest.Mock).mockReturnValue({
      users: mockUsers,
      handleRowClick: jest.fn(),
    });

    // Mock the useAddUser hook
    (useAddUser as jest.Mock).mockReturnValue({
      openAddUserModal: jest.fn(),
      isAddUserModalOpen: false,
      closeAddUserModal: jest.fn(),
      formik: { values: {}, handleSubmit: jest.fn() },
    });

    // Mock the useDeleteUser hook
    (useDeleteUser as jest.Mock).mockReturnValue({
      isDeleteUserModalOpen: false,
      openDeleteUserModal: jest.fn(),
      closeDeleteUserModal: jest.fn(),
      deleteUser: jest.fn(),
    });
  });

  it('renders the dashboard title and table headers', () => {
    render(<Dashboard />);

    // Check if the main title is rendered
    expect(
      screen.getByText('Social Media Performance Overview')
    ).toBeInTheDocument();

    // Check if table headers are rendered
    expect(screen.getByText('Avatar')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('Engagement Rate')).toBeInTheDocument();
    expect(screen.getByText('Likes')).toBeInTheDocument();
    expect(screen.getByText('Date Created')).toBeInTheDocument();
  });

  it('renders the user data in the table', () => {
    render(<Dashboard />);

    // Check if user data is rendered correctly
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
  });

  it('opens the Add User modal when the "Add New User" button is clicked', () => {
    const { openAddUserModal } = useAddUser() as jest.Mock;
    render(<Dashboard />);

    // Simulate clicking the "Add New User" button
    fireEvent.click(screen.getByText('Add New User'));

    // Check if the openAddUserModal function was called
    expect(openAddUserModal).toHaveBeenCalled();
  });

  it('opens the Delete User modal when the delete button is clicked', () => {
    const { openDeleteUserModal } = useDeleteUser() as jest.Mock;
    render(<Dashboard />);

    // Simulate clicking the delete icon for a user
    const deleteButtons = screen.getAllByLabelText('delete');
    fireEvent.click(deleteButtons[0]);

    // Check if the openDeleteUserModal function was called with the correct user ID
    expect(openDeleteUserModal).toHaveBeenCalledWith('1');
  });

  it('renders AddUserModal and DeleteUserModal when opened', async () => {
    // Mock the AddUser and DeleteUser modal state as open
    (useAddUser as jest.Mock).mockReturnValueOnce({
      openAddUserModal: jest.fn(),
      isAddUserModalOpen: true, // Mocking modal as open
      closeAddUserModal: jest.fn(),
      formik: { values: {}, handleSubmit: jest.fn() },
    });

    (useDeleteUser as jest.Mock).mockReturnValueOnce({
      isDeleteUserModalOpen: true, // Mocking modal as open
      openDeleteUserModal: jest.fn(),
      closeDeleteUserModal: jest.fn(),
      deleteUser: jest.fn(),
    });

    render(<Dashboard />);

    // Check if AddUserModal is visible
    expect(screen.getByText('Add New User')).toBeInTheDocument();

    // Check if DeleteUserModal is visible
    expect(
      screen.getByText('Are you sure you want to delete this user?')
    ).toBeInTheDocument();
  });
});
