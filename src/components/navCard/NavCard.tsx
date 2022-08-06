import React from 'react';
import {Button, Nav} from "react-bootstrap";
import {User} from "../../types";
import {useNavigate} from "react-router-dom";

type Props = {
    user: User
}

const NavCard = ({user} : Props) => {

    const navigate = useNavigate();

    const handleUserSignOut = () : void => {
        localStorage.clear();
        navigate('../');
    }

    return (
        <Nav className={'bg-dark p-3 justify-content-between align-items-center'}>
            <Nav.Item className={'text-white'}>{user?.username || "No Username"}</Nav.Item>
            <Nav.Item className={'text-white'}>
                <Button variant="light" onClick={handleUserSignOut}>
                    Sign out
                </Button>
            </Nav.Item>
        </Nav>
    );
};

export default NavCard;