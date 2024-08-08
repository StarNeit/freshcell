import React, { ReactElement } from 'react';
import { useAuthStore } from '@stores';
import { Chip } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

const Account = (): ReactElement => {
  const { t } = useTranslation();

  const { user } = useAuthStore();

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col pt-20 gap-4 px-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <span>{t('username')}</span>
        <span className="font-semibold">{user?.username}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <span>{t('email')}</span>
        <span className="font-semibold">{user?.email}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <span>{t('role')}</span>
        <div className="font-semibold">
          {user?.role.name}
          <p className="text-sm">{user?.role.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <span>{t('confirmed')}</span>
        <div className="flex">
          <Chip variant="ghost" value={user?.confirmed ? t('yes') : t('no')} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <span>{t('blocked')}</span>
        <div className="flex">
          <Chip variant="ghost" value={user?.blocked ? t('yes') : t('no')} />
        </div>
      </div>
    </div>
  );
};

export default Account;
