import React from 'react';
import './App.css';
import NavigatonTop from "./components/NavigatonTop";
import Welcome      from "./components/Welcome";
import FooterBottom from "./components/FooterBottom";

function App() {
    return (
        <div className="App">
            <h1 className="">M4-D2-HOMEWORK</h1>
            <NavigatonTop />
            <Welcome />
            <FooterBottom />
        </div>
    );
}

export default App;
