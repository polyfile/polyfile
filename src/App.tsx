import React, {CSSProperties} from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundImg from "./BackgroundImg";
import Intro from "./Intro";
import MoreText from "./MoreText";
import Link from "./Link";
import End from "./End";
import Roll from "./Roll";

export default function App() {
  return (
      <body>
      <BackgroundImg></BackgroundImg>
      <Intro></Intro>
      <MoreText></MoreText>
      <Link></Link>
      <Roll></Roll>
      <End></End>
      </body>
  );
}

