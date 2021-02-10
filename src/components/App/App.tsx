import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';

const App=()=>{
    return(
        <>
        <h1 className="our_h1">Timer Developed by Athar Rasool</h1>
        <div className="container">
            <Timer/>
        </div>
        </>
    )
}

export default App;