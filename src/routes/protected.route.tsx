import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../store/authentication';

export default function ProtectedRoute() {
  const { isLogged } = useAuthentication();
  if (!isLogged) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
}
