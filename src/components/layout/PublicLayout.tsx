import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@stores';
import { useQuery } from '@apollo/client';
import { GET_ME } from '@apollo/queries';
import { Button } from '@material-tailwind/react';
import Loader from '@components/Loader';
import { useTranslation } from 'react-i18next';

const PublicLayout = (): JSX.Element => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { token, user, setUser, logout } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate('/auth/login');
    }
  }, [token]);

  const { data, loading } = useQuery(GET_ME, {
    variables: {
      id: user?.id
    },
    skip: !user
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="p-4 flex justify-end">
        <Button onClick={logout}>{t('logout')}</Button>
      </div>

      <Outlet />

      {loading && <Loader />}
    </div>
  );
};

export default PublicLayout;
