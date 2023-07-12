import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const position: CSSProperties = {
    position: 'relative',
    bottom: '460px',
    padding: '50px',
}
export default function MoreText() {
    return (
        <html style={position}>
        <h2>So, how did you get to this page...?</h2>
        <p>
            The only way you could gain access to this website was through a file you opened which opened this page on your web browser.
            ...and that's probably how you gained access... and if you somehow did, then congratulations! <br></br>
            I need you to know this webpage was created solely using the React framework, where this page was written in a React-ian
            dialect of Typescript, known as .tsx, which basically is Typescript that borrows some HTML and CSS <br></br>
            vocabulary. The purpose of creating this web page was to showcase my front-end developing skills...
        </p>
        <h2>Showcase front-end developing skills for what?</h2>
        <p>
            If I was able to create this webpage, then imagine what other webpages I might create. This webpage was created
            within a day. So, some may wonder if I have any qualities of being a front-end developer, this literal page <br></br>
            should give a brief demonstration of that. You can click this link down here if you wanna tell me to create more pages.
        </p>
        </html>
    );
}
