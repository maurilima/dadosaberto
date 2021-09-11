import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './index.css';

function BarNavegate() {
    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">COGER</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">VISÃO GERAL</Nav.Link>
                        <Nav.Link href="#features">PEDIDOS</Nav.Link>
                        <Nav.Link href="#pricing">SOLICITANTES</Nav.Link>
                        <Nav.Link href="#pricing">OMISSÕES</Nav.Link>
                        <Nav.Link href="#pricing">RECURSOS</Nav.Link>
                        <Nav.Link href="#pricing">TRANSPARÊNCIA ATIVA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default BarNavegate;


