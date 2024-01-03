import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../store/authentication';

export default function PublicRoute() {
  const { isLogged } = useAuthentication();
  if (isLogged) {
    return <Navigate to="/" replace={true} />;
  }
  return <Outlet />;
}
