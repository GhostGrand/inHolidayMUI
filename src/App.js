import logo from './logo.svg';
import './App.css';
import CoolAppBar from './Components/CoolAppBar'
import { AppBar, Box, Container, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Menu } from '@mui/icons-material';
import MainPage from './Components/MainPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];

function App() {
  
  return (  
     <Router>
      <div className="App"> 
      <CoolAppBar></CoolAppBar>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      </div>
     </Router>


    
  );
}

export default App;
