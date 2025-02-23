// LandingPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './LandingPage.css'; // Optional: add your styles here

const LandingPage = ({ onStart }) => {
  return (
    <Box className="landing-container" style={{ textAlign: 'center', padding: '24px' }}>
      <Typography variant="h3" className="landing-title" style={{ marginBottom: '16px', color: '#FFFFFF' }}>
        Welcome to Teleparty Clone
      </Typography>
      <Button 
        variant="contained" 
        onClick={onStart} 
        className="start-button" 
        style={{
          background: 'linear-gradient(135deg, rgba(0,188,212,0.5), rgba(0,150,200,0.5))',
          border: '1px solid #00BCD4',
          borderRadius: '8px',
          color: '#FFFFFF',
          padding: '10px 20px'
        }}
      >
        Start the Party
      </Button>
    </Box>
  );
};

export default LandingPage;
