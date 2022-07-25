import React from 'react';
import routes from "../helpers/routes";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>Bienvenido a Jury</h2>
                    <p>¡aquí podrás gestionar tus proyectos!</p>
                    <Link to={routes.login}>Ingresa</Link>
                </Col>
                <Col>
                    <img
                        className='img-fluid'
                        src="/img/task-manager.svg"
                        alt="gestor-github"
                    />
                    <p>Jury es un gestor de respostorios en GitHub</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage