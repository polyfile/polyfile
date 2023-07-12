import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const box: CSSProperties = {
    backgroundColor: 'rgba(200,200,200,10)',
    margin: 'auto',
    position: 'relative',
    bottom: '750px',
    width: '800px',
    height: '400px',
    borderRadius: '60px',
    opacity: '0.8',
}
const margin: CSSProperties = {
    padding: '20px',
    margin: '120px',
}
export default function Intro() {
    return (
        <html style={box}>
        <body style={margin}>
        <h1>How did you find this webpage?</h1>
        <h3>
            I have no idea how you found this webpage.
            From my understanding, all webpages are located
            on random servers in random headquarters that
            require you to pay money in order to access. I
            did not pay anything, so where is the webpage
            located then? Well, it's located on my
            http://localhost:3000/, which you most likely
            cannot access. It is only active once in a blue
            moon, and even if it is, it is probably also
            equipped with a bunch of firewalls that make it
            impossible for you to penetrate it. <br></br>
            Scroll down to read more \/

        </h3>
        </body>
        </html>
    );
}