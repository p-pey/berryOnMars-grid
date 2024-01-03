import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import { useToggle } from '../hooks';
import { useEffect } from 'react';
import { useAuthentication } from '../store/authentication';
import { getStorage } from '../utils/utility';
import ProtectedRoute from './protected.route';
import PublicRoute from './public.routes';

function AppRoutes() {
  const [loading, toggleLoading] = useToggle(true);
  const { updateAuthentication, isLogged } = useAuthentication();
  useEffect(() => {
    updateAuthentication(!!getStorage('isLogged'));
    if (typeof isLogged === 'boolean') {
      toggleLoading(false);
    }
  }, [isLogged]);

  if (loading) return undefined;
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route key="dashboard" path="" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<PublicRoute />}>
        <Route key="login" path="" element={<Login />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
