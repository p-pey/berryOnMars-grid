import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route key="dashboard" path="/" element={<Dashboard />} />
      <Route key="login" path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRoutes;
