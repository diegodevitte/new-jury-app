import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const Navigation = () => {
    const { logout, isLogged } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
                <img
                    src="/img/jury.png"
                    alt="profile"
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginLeft: '30px',
                        objectFit: 'cover'
                    }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    {
                        isLogged() &&
                        <Nav.Link as={NavLink} to={routes.projects}>
                            Projectos
                        </Nav.Link>
                    }
                    {
                        isLogged() &&
                        <NavDropdown title="Opciones" style={{ position: 'absolute', right: 0, marginRight: '70px' }}>
                            <NavDropdown.Item as={NavLink} to={routes.account}>
                                Mi cuenta
                            </NavDropdown.Item>
                            <NavDropdown.Item to={routes.account} onClick={logout}>
                                Cerrar Sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    }
                    {
                        !isLogged() &&
                        <Nav.Link as={NavLink} to={routes.login}>
                            Iniciar Sesión
                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation