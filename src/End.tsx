import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const size: CSSProperties = {
    fontSize:'140px',
    margin:'60px',
}
export default function End() {
    return (
        <p style={size}>This is the end of the page</p>
    );
}
