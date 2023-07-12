import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSProperties} from "react";

const backGround: CSSProperties = {
    width: '100%',
}
export default function BackgroundImg() {
    return (
        <img style={backGround} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Internet.jpg"></img>
    );
}
