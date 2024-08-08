import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@stores';

const PrivateLayout = (): JSX.Element => {
  const navigate = useNavigate();

  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
