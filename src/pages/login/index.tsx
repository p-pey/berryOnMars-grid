import { FormEventHandler, useMemo, useState, useTransition } from 'react';
import { loginInputs } from './lib';
import { validate } from './lib/helper';
import { DEFAULT_LOGIN_INPUTS } from './lib/constant';
import { LoginService } from './lib/services';
import { useToggle } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { saveStorage } from '../../utils/utility';
import { useAuthentication } from '../../store/authentication';

function Login() {
  const transition = useTransition();
  const { updateAuthentication } = useAuthentication();
  const navigate = useNavigate();
  const [loading, toggleLoading] = useToggle(false);
  const [values, setValues] = useState<loginInputs>(DEFAULT_LOGIN_INPUTS);
  const handleChangeUsername: FormEventHandler<HTMLInputElement> = (event) => {
    const username = event.currentTarget.value;
    transition[1](() => {
      validate
        .username(username)
        .then(() => {
          setValues((p) => ({
            ...p,
            username: {
              error: undefined,
              value: username,
            },
          }));
        })
        .catch((error) => {
          setValues((p) => ({
            ...p,
            username: {
              error: error,
              value: p.username.value,
            },
          }));
        });
    });
  };
  const handleChangePassword: FormEventHandler<HTMLInputElement> = (event) => {
    const password = event.currentTarget.value;
    transition[1](() => {
      validate
        .password(password)
        .then(() => {
          setValues((p) => ({
            ...p,
            password: {
              error: undefined,
              value: password,
            },
          }));
        })
        .catch((error) => {
          setValues((p) => ({
            ...p,
            password: {
              error: error,
              value: p.password.value,
            },
          }));
        });
    });
  };
  const isAllowToSubmit = useMemo(() => {
    return !values.username.error && !values.password.error;
  }, [values]);
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!isAllowToSubmit) return;
    toggleLoading(true);
    LoginService(values)
      .then(() => {
        toast.success('Successfully Logged in');
        saveStorage('isLogged', 'true');
        updateAuthentication(true);
        navigate('/');
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        toggleLoading(false);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-7/12 lg:w-1/2 xl:w-1/4 px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Username
              </label>
              <input
                type="text"
                placeholder="username"
                aria-invalid={!!values.username.error}
                onChange={handleChangeUsername}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="text-red-500 text-sm font-semibold">{values.username.error}</span>
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                onChange={handleChangePassword}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <span className="text-red-500 text-sm font-semibold">{values.password.error}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <button
                disabled={loading}
                aria-disabled={loading}
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
