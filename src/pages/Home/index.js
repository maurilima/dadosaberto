import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import CardVisao from "../../components/CardVisao";
import Gauge from "../../components/Gauge";
import RakingOrgaos from "../../components/RakingOrgaos";
import StatusPedido from "../../components/StatusPedido";
import './index.css'





function Home() {

  return (
    <React.Fragment>

      <Container id='container'>
        <Row id='row-base' >
          <Row id='row-visao' >
            <Col id='col-titulo' xs={12} sm={6} md={6} lg={6} xxl={6}>
              Visao Geral
            </Col>
            <Col id='col-pedido' xs={12} sm={6} md={6} lg={6} xxl={6} >
              STATUS DOS PEDIDOS
            </Col>

          </Row>
          <Row  >

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
                <Gauge value={.85}/>
                </Col>
              </Row>
            </Col>
            <Col xs={12} xl={6} xxl={6}>
              <StatusPedido />
            </Col>
          </Row>
        </Row>
      </Container >
      <RakingOrgaos />
      <div className="demo">
        <renderProgress />

      </div>
      <Row>
       
      </Row>

    </React.Fragment>


  )
}

export default Home