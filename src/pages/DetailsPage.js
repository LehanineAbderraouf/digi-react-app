import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import '@fontsource/orbitron'; // Futuristic font

const DetailsPage = () => {
  const location = useLocation();
  const { element } = location.state; // Accessing the element passed via state

  return (
    <Box
      style={{ backgroundColor: 'navy', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '20px' }}
    >
      {/* NASA Logo */}
      <div style={{ marginBottom: '30px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
          alt="NASA Logo"
          style={{ width: '150px' }}
        />
      </div>

      {/* Card containing the HD image, title, and explanation */}
      <Card style={{ backgroundColor: '#0d47a1', color: 'white', fontFamily: 'Orbitron, sans-serif', margin: '0 auto', maxWidth: '800px' }}>
        {/* Displaying the HD image */}
        <CardMedia
          component="img"
          image={element.hdurl} // Use hdurl for the high-definition image
          alt={element.title}
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          {/* Displaying the title */}
          <Typography variant="h4" gutterBottom style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {element.title}
          </Typography>

          {/* Displaying the date */}
          <Typography variant="h6" style={{ marginBottom: '20px', fontFamily: 'Orbitron, sans-serif' }}>
            {element.date}
          </Typography>

          {/* Displaying the description (explanation) */}
          <Typography variant="body1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {element.explanation}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailsPage;
