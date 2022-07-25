import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from "../helpers/routes";

export default function AccountPage() {
    const { user } = useAuth();
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} className="text-center">
                    <img
                        src="/img/male_avatar.svg"
                        alt="profile"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col className="mt-4" md={{ span: 6, offset: 3 }}>
                    <Card>
                        <p className="text-center"><b>Nombre: </b>{user.name}</p>
                        <p className="text-center"><b>Email: </b>{user.email}</p>
                        <div className="text-center" md={{ span: 6, offset: 3 }} >
                            <Button variant="outline-primary" className="mb-4" role="button" as={Link} to={routes.projects}>
                                Ver mis repositorios
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}