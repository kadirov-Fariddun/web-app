import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import Navibar from "./Navibar";
import Matches from './Matches';
import News from './News';
import Table from "./Table";
import Stat from "./Stat";
import Teams from "./Teams";
import Kubok from "./Kubok";
import Footer from './Footer';
import NotFount from "./NotFount";


function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<Matches />} />
        <Route path='/news' element={<News />} />
        <Route path='/table' element={<Table />} />
        <Route path='/stat' element={<Stat />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/kubok' element={<Kubok />} />
        <Route path='*' element={<NotFount />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
