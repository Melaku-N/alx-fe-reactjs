import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export { ProtectedRoute };
