import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const box: CSSProperties = {
    backgroundColor: 'rgba(100,100,200,255)',
    borderColor: 'rgba(150,150,200,255)',
    position: 'relative',
    left: '50px',
    bottom: '500px',
    height: '50px',
    width: '90%',
    padding: '50px',
    borderRadius: '20px',
    cursor: 'pointer',
}



export default function Link() {
    return (
        <body>
        <button type="button" style={box} onClick={() => {
            window.location.href = "https://www.linkedin.com/in/mateusz-al-halabi-88b023265/";
        }}>
            Linked-in account
        </button>
        </body>
    );
}