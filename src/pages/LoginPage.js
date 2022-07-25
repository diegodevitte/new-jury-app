import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../auth/useAuth";

const userCredentials = {};

export default function LoginPage() {
    const location = useLocation();
    const { login } = useAuth();
    return (
        <Container className="text-center">
            <Row>
                <Col className="mt-5" md={{ span: 6, offset: 3 }}>
                    <Card className="text-center">
                        <h2 className="mt-3">Iniciar sesión con GitHub</h2>
                        <div className="text-center mt-2">
                            <img className="text-center"
                                src="/img/jury.png"
                                alt="profile"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div className="text-center mt-5" md={{ span: 6, offset: 3 }} >
                            <Button variant="outline-primary" className="mb-2" role="button"
                                onClick={() => login(userCredentials, location.state?.from)}
                            >Iniciar Sesión
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}