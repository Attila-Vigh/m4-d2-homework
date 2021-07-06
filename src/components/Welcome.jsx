import React from 'react';

const Welcome = ( props ) => {
    const styleJumbotron = { 
        backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/I/616z3tDYdmL.jpg)",
        color: "#121212",
        fontWeight: 900,
    }
    return ( 
        <div className="jumbotron jumbotron-fluid" style={ styleJumbotron }>
            <div className="container">
                <h2 className="display-4">Welcome</h2>
                <p className="lead">Come and get your dreams!</p>
            </div>
        </div>
     );
}
 
export default Welcome;