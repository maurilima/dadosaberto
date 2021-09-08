import React from "react"
import { Card } from 'react-bootstrap'
import './index.css';

function CardVisao({ children, subtitle, texto }) {

    return (
        <Card id='cartao' border='light' style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title id='titulo' >{children}</Card.Title>
                <Card.Subtitle id='subtitulo' >{subtitle}</Card.Subtitle>
                <Card.Text id='texto'>
                    {texto}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default CardVisao;
//   style={{color: '#2BD925', fontSize: '2rem' }}