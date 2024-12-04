import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const {auth} = useContext(AuthContext);
    let authenticated = {'token': auth}
  return (
    authenticated.token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoutes