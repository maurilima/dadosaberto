import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BoxShadow from '../BoxShadow';
import OrderEvolution from '../OrderEvolution';

// import { Container } from './styles';

function ViewOrderEvolution() {
    return (
        <Container fluid id='container-orderevolution' >
            <Row id='row-orderevolution' >
                <Col id='col-orderevolution' xs={12} xl={6} xxl={6}>
                    <OrderEvolution />
                </Col>

                <Col id='col-boxes'>
                    <Row sm={12} id='row-instancia'>
                        Recurso por Instancia
                    </Row>
                    <Row id='row-boxes'>
                        <Col id='col-boxes-1' sm={6} md={6} lg={6} xxl={6}  >
                            <BoxShadow title='1ª INSTÂNCIA' texto='20.000' />
                        </Col>
                        <Col id='col-boxes-2' sm={6} md={6} lg={6} xxl={6}  >
                            <BoxShadow title='2ª INSTÂNCIA' texto='1.997' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default ViewOrderEvolution;