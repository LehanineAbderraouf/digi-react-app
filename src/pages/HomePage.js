import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardMedia, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '@fontsource/orbitron'; // Futuristic font

const HomePage = () => {
  const [elements, setElements] = useState([]);
  const [sortedElements, setSortedElements] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15')
      .then(response => {
        setElements(response.data);
        setSortedElements(response.data); // Initially no sorting/filtering
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (element) => {
    navigate('/details', { state: { element } });
  };

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);

    // Sorting based on the selected option
    let sorted = [...elements];
    if (option === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title
    } else if (option === 'date') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, latest first
    }

    setSortedElements(sorted);
  };

  const handleYearFilterChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    // Filter elements based on the selected year
    if (year) {
      const filtered = elements.filter((element) => new Date(element.date).getFullYear() === parseInt(year));
      setSortedElements(filtered);
    } else {
      setSortedElements(elements); // Reset to all elements if no year is selected
    }
  };

  // Get unique years from elements, then sort them in ascending order
  const years = [...new Set(elements.map((element) => new Date(element.date).getFullYear()))].sort((a, b) => a - b);

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'navy', color: 'white', minHeight: '100vh' }}>
      
      {/* NASA Logo */}
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" 
          alt="NASA Logo" 
          style={{ width: '150px' }} 
        />
      </div>

      {/* Sort Option */}
      <FormControl style={{ marginBottom: '20px', minWidth: '200px', marginRight: '10px' }}>
        <InputLabel style={{ color: 'white' }}>Sort By</InputLabel>
        <Select
          value={sortOption}
          onChange={handleSortChange}
          style={{ color: 'white' }}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>

      {/* Filter by Year */}
      <FormControl style={{ marginBottom: '20px', minWidth: '200px' }}>
        <InputLabel style={{ color: 'white' }}>Filter by Year</InputLabel>
        <Select
          value={selectedYear}
          onChange={handleYearFilterChange}
          style={{ color: 'white' }}
        >
          <MenuItem value="">All Years</MenuItem>
          {years.map((year, index) => (
            <MenuItem key={index} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Grid of Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
        {sortedElements.map((element, index) => (
          <Card 
            key={index} 
            onClick={() => handleClick(element)} 
            style={{ cursor: 'pointer', backgroundColor: '#0d47a1', color: 'white' }}
          >
            <CardHeader
              title={element.title}
              style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}
            />
            <CardMedia
              component="img"
              height="140"
              image={element.url} // Thumbnail image
              alt={element.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}>
                {element.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
