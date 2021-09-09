import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

// import { Container } from './styles';

function BarNavegacao() {
    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">COGER</Navbar.Brand>
                    <Nav className="me-auto">
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

export default BarNavegacao;


