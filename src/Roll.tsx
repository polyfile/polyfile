import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const ad: CSSProperties = {
    backgroundColor:'rgba(200,200,220,20)',
    opacity:'0.8',
    position:'fixed',
    top: '50px',
    right: '20px',
    height: '200px',
    width: '60px',
    borderRadius: '10px',
}
const button: CSSProperties = {
    backgroundColor:'rgba(100,100,200,20)',
    position:'relative',
    top: '10px',
    left: '10px',
    height: '20px',
    width: '40px',
    borderRadius: '10px',
    cursor: 'pointer',
}
const text: CSSProperties = {
    color: 'rgba(0,0,140,100)',
    position: 'relative',
    left: '25px',
    top: '20px',
}
export default function Roll() {
    return (
        <body style={ad}>
        <button type={"button"} style={button} onClick={() => { window.location.href = "https://www.youtube.com/watch?v=xm3YgoEiEDc&t=9s"}}></button>
        <html style={text}>
        ^<br></br>
        C<br></br>
        L<br></br>
        I<br></br>
        C<br></br>
        K<br></br>
        !<br></br>
        </html>
        </body>
    );
}
