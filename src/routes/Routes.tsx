import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';
import Dashboard from '../pages/Dashboard/Dashboard';
import UserProfile from '@/pages/UserProfile/UserProfile';
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      errorElement: <NotFound />,
      children: [
        { index: true, Component: Dashboard },
        { path: '/users/:id', Component: UserProfile },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
