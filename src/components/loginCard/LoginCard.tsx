import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface LoginData {
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

const baseUrl: string = "https://0m7ez.mocklab.io/";

const LoginCard = () => {

    const navigate = useNavigate();

    const handleUserLogin = (e: React.FormEvent): void => {
        e.preventDefault();
        const formData: FormData = new FormData(e.target as HTMLFormElement);
        const reqBody: LoginData = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        axios.post(baseUrl + 'login', reqBody)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('username', res.data.username);
                navigate('home');
            })
            .catch((err) => {
                console.log(err);
                alert("Wrong Email or Password!");
            });
        console.log(reqBody);

    }

    return (
        <Card>
            <Card.Body>
                <h4>Please Login!</h4>
                <Form onSubmit={handleUserLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name={'email'} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name={'password'} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginCard;