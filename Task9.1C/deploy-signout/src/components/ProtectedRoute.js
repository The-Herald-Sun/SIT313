import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = () => {
  const { currentUser, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // You can show a loading indicator
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
