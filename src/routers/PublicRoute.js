import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes';

const PublicRoute = (props) => {
    const { isLogged } = useAuth();

    if (isLogged()) return <Redirect to={routes.projects} />

    return (
        <Route {...props} />
    )
}

export default PublicRoute