import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoginCard from "../../components/loginCard/LoginCard";

const Login = () => {
    return (
        <Container fluid={'md'}>
            <Row className={'vh-100 align-items-center'}>
                <Col md={{offset: 3, span: 6}}>
                    <LoginCard />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;