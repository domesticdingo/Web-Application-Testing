import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
    const [balls, setBalls] = useState (0);
    const [strikes, setStrikes] = useState (0);
    const [outs, setOuts] = useState (0);

    const strike = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        }
        else {
            alert("Player has struck out")
            setBalls(0);
            setStrikes(0);
            if (outs < 2) {
                setOuts(outs + 1);
            }
            else {
                alert("End of inning");
                setOuts(0);
            }
        }
    }

    const ball = () => {
        if (balls < 3) {
            setBalls(balls + 1);
        }
        else {
            alert("Player walks");
            setBalls(0);
            setStrikes(0);
        }
    }

    const foul = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        }
    }

    const hit = () => {
        alert("Player hits");
        setBalls(0);
        setStrikes(0);
    }

    return (
        <div>
            <Display strikes={strikes} balls={balls} outs={outs}/>
            <button onClick={strike}>Strike</button>
            <button onClick={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit</button>
        </div>
    )
}

export default Dashboard;