import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './index.css'
import TableOmissao from "./TableOmissao";
import TableRaking from "./TableRaking";


function RakingOrgaos() {

    return (
        <React.Fragment>
            <Container id='container-raking'>
                <Row xs={12} xl={6} xxl={6} id='row-base-raking'>
                    <Col id='col-table' xs={12} xxl={6}>
                        <TableRaking/>
                    </Col>
                    <Col id='col-table-omissao' xs={12} xl={6}  xxl={6}>
                       <TableOmissao/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    )


}
export default RakingOrgaos