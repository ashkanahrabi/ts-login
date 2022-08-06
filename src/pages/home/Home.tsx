import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import NavCard from "../../components/navCard/NavCard";
import {User} from "../../types";


const Home = () => {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const email: string | null = localStorage.getItem('email');
        const username: string | null = localStorage.getItem('username');

        setUser({
            username,
            email,
            userId: null
        });

    }, []);

    return (
        <Container fluid className={'p-0'}>
            <NavCard user={user}/>
            <Row className={'vh-100 align-items-center'}>
                <Col md={{offset: 3, span: 6}}>
                    <Card className={'d-flex justify-content-center align-items-center p-2'}>
                        <h2>Welcome to Homepage!</h2>
                        <div>Your email address is: {user?.email}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;