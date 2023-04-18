import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const styles = {
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    padding: '10px 10px',
    color: '#09114e',
    backgroundColor: '#b3b289',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 10px',
    color: '#09114e',
    backgroundColor: '#b3b289',
  }
}

function Header() {
  return (
    <header style={styles.top}>
      <h1 style={styles.heading}>Kelsey's Portfolio</h1>
      <Navbar />
    </header>
  );
}

export default Header;