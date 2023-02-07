import logo from './logo.svg';
import './App.css';
import CoolAppBar from './Components/CoolAppBar'
import { AppBar, Box, Container, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Menu } from '@mui/icons-material';


const pages = ["Products", "Pricing", "Blog"];

function App() {
  
  return (  
    
    <CoolAppBar></CoolAppBar>
  );
}

export default App;
