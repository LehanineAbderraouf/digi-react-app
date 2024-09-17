# NASA-Themed React App
This project is a NASA-themed web application built using React, Material UI, and Axios. It fetches data from the NASA Astronomy Picture of the Day (APOD) API, displays it in a card grid format, and allows users to sort, filter by year, and explore detailed views of each element. The application features a futuristic design, using the Orbitron font and a navy blue color scheme, alongside the NASA logo for an authentic space aesthetic.

### Features
API Integration: Fetches data from NASA's APOD API, displaying a collection of images and information related to space exploration.

Sorting and Filtering: Users can sort the items by title or date and filter them by year using a dropdown menu.

Responsive Design: Utilizes Material UI for responsive card layouts, suitable for different screen sizes.

Thematic UI: The application uses the Orbitron font for a futuristic look, with a consistent navy blue color scheme throughout the pages.

Detailed View: Clicking on any card opens a detailed page with a high-definition image, title, and explanation of the selected element.

Navigation: Uses react-router-dom for smooth navigation between the homepage, login page, and details page.

NASA Branding: Features the NASA logo centered on the homepage, adding to the space theme.

## Getting Started

This project was bootstrapped with Create React App.

## Prerequisites

To run this project, you need to have Node.js installed. You will also need an API key from NASA to replace the DEMO_KEY used in the API requests.

Clone the repository.

Install dependencies using:

### npm install

Replace the DEMO_KEY with your own NASA API key in the API request URL.

## Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

### npm test
Launches the test runner in the interactive watch mode.

### npm run build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### npm run eject
This command will remove the single build dependency from your project and copy all the configuration files so you can customize them.

## Learn More
To learn more about using React and Material UI, check out the following resources:

Create React App Documentation
React Documentation
Material UI Documentation


## Future Enhancements

Dark Mode: Implement a dark mode feature for users to switch themes.

Additional Filters: Add more filtering options like media type (image/video).

Infinite Scroll: Load more items dynamically as the user scrolls.
