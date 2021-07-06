import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import books from '../data/horrorx.json'

const LatestRelease = ( props ) =>{
    console.log( books );

    return (
        <Container> 
            <Row xs={1} md={5} className="g-4">
                { 
                    books.map( ({ id, img }) => 
                        <Card key={id} style={{ width: '18rem' }}>
                            <Card.Img src={ img } /> 
                        </Card>
                    )
                }
            </Row>
        </Container>
    )
 }
export default LatestRelease;