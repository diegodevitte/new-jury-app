import { Route, Switch } from "react-router-dom"
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "../helpers/routes";

export default function AppRouter() {
    return (
        <Switch>
            <PublicRoute exact path={routes.login} component={LoginPage} />
            <PrivateRoute exact path={routes.account} component={AccountPage} />
            <PrivateRoute exact path={routes.projects} component={ProjectsPage} />
            <PrivateRoute exact path={routes.project()} component={ProjectPage} />
            <PublicRoute exact path={routes.home} component={HomePage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    )
}