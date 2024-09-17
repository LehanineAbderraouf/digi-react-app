import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@fontsource/orbitron'; // Futuristic font

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}
    >
      <Box>
        {/* NASA Logo */}
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" 
            alt="NASA Logo" 
            style={{ width: '150px' }} 
          />
        </div>

        {/* Login Form */}
        <Typography variant="h4" style={{ fontFamily: 'Orbitron, sans-serif', marginBottom: '20px' }}>
          Login
        </Typography>
        <TextField 
          label="Username" 
          fullWidth 
          margin="normal" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{ style: { color: 'white', backgroundColor: '#0d47a1' } }} 
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{ style: { color: 'white', backgroundColor: '#0d47a1' } }} 
        />
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleLogin} 
          style={{ marginTop: '20px', backgroundColor: '#0d47a1', color: 'white', fontFamily: 'Orbitron, sans-serif' }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
