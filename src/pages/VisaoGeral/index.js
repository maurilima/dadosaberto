import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardVisao from '../../components/CardVisao';
import Gauge from '../../components/Gauge';
import StatusPedido from '../../components/StatusPedido';
import './index.css'

// import { Container } from './styles';

function VisaoGeral() {
    return (
        <Container fluid id='container-row-pedidos'>
            <Row id='row-base' >
                <Row id='row-titulo-visao' >
                    <Col id='col-titulo-visao' xs={12} sm={6} md={6} lg={6} xxl={6}>Visao Geral</Col>
                    <Col id='col-pedido' xs={12} sm={6} md={6} lg={6} xxl={6} >STATUS DOS PEDIDOS</Col>

                </Row>
                <Row id='row-pedidos' >
                    <Col xs={12} xl={6} xxl={6}>
                        <Row id='row-cards'>
                            <Col id='col-card' xs={12} sm={6} md={6} lg={6} xxl={6} >
                                <CardVisao subtitle='1.000.325'>PEDIDOS RECEBIDOS</CardVisao>
                            </Col>
                            <Col id='col-card' xs={12} sm={6} md={6} lg={6} xxl={6} >
                                <CardVisao
                                    subtitle='15,16 dias' texto='Tempo médio de resposta que o Orgão leva pra responder ' >TEMPO MÉDIO DE RESPOSTA</CardVisao>
                            </Col>
                        </Row>
                        <Row id='row-gauge'>
                            <Col xs={12} sm={6} md={6} lg={6} xxl={6} >
                                <Gauge value={.70} ></Gauge>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                                <Gauge value={.85} />
                            </Col>
                        </Row>
                        <Row >
                            <Col id='col-legenda-gauge' xs={12} sm={6} md={6} lg={6} xxl={6} >
                                <p>Não Atendeu</p>
                                <p>Atendeu Plenamente</p>
                            </Col>
                            <Col id='col-legenda-gauge-2' xs={12} sm={6} md={6} lg={6} xxl={6}>
                                <p>Dificil Compreensão</p>
                                <p>Fácil Compreensão</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} xl={6} xxl={6}>
                        <StatusPedido />
                    </Col>
                </Row>
            </Row>
        </Container >



    )
}
export default VisaoGeral;