import React from 'react';
import './App.css';
import {Technologies} from "./Components/Technologies/Technologies";
import {Header} from "./Components/Header/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

export default App;
