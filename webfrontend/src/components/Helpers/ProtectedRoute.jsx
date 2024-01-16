import React, { useContext } from 'react';
import { UserContext } from '../../ContextLayout';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <Navigate to={'/login'} />;
  return element
}

export default ProtectedRoute;
