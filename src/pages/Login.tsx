import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@material-tailwind/react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@apollo/mutations';
import { useAuthStore } from '@stores';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '@components/Loader';
import { useTranslation } from 'react-i18next';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginForm = {
  identifier: string;
  password: string;
};

const Login = (): ReactElement => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>();

  const { setToken, setUser } = useAuthStore();

  const [login, { loading }] = useMutation(LOGIN);

  const onSubmit: Parameters<typeof handleSubmit>[0] = async (
    value: LoginForm
  ) => {
    try {
      const response = await login({
        variables: {
          input: value
        }
      });

      if (response.data?.login?.jwt) {
        setToken(response.data.login.jwt);
        setUser(response.data.login.user);
        navigate('/');
        toast(t('login_success'), {
          type: 'success'
        });
      }
    } catch (error: any) {
      if (error?.message) {
        toast(error.message, {
          type: 'error'
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center pt-40 px-6">
      <h2 className="text-3xl font-semibold mb-10">{t('login')}</h2>
      <form className="max-w-md w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            label={t('email')}
            type="email"
            error={!!errors.identifier?.message}
            {...register('identifier', {
              required: t('email_required'),
              pattern: {
                value: EMAIL_PATTERN,
                message: t('invalid_email')
              }
            })}
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">
              {errors.identifier.message}
            </p>
          )}
        </div>

        <div className="mb-8">
          <Input
            label={t('password')}
            type="password"
            error={!!errors.password?.message}
            {...register('password', { required: t('password_required') })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button fullWidth disabled={loading} type="submit">
          {t('login')}
        </Button>
      </form>

      {loading && <Loader />}
    </div>
  );
};

export default Login;
