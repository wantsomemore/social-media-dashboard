import { useAppSelector } from '@/hooks/useStore';
import { getLoading } from '@/store/utils/getLoading';
import { CircularProgress } from '@mui/material';
import React from 'react';
import { useStore } from 'react-redux';
import { Outlet } from 'react-router';

const Layout = () => {
  const store = useAppSelector((state) => state);
  const isLoading = getLoading(store);
  console.log('load', isLoading);
  return (
    <div
      className={`${isLoading ? `bg-#fff` : 'bg-#323232'} w-screen h-screen`}
    >
      <Outlet />
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Layout;
