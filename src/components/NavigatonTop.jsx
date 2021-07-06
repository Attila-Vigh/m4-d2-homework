import React from 'react';
import Nav from 'react-bootstrap/Nav'

const NavigatonTop = ( props ) => {
    return ( 
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/browse">Browse</Nav.Link>
            </Nav.Item>
        </Nav>
     );
}
 
export default NavigatonTop;