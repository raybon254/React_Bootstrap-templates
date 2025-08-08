// 🌀 What is a Spinner?
// A Spinner in React-Bootstrap provides a visual indicator that content is loading. They’re helpful when you’re fetching data or waiting for an operation to complete.
// React-Bootstrap offers two types of spinners:
//     border spinner (default)
//     grow spinner

// // Import 
// import { Spinner } from 'react-bootstrap';


// // Basic usage
// // Border spinner
// <Spinner animation="border" />

// // Grow spinner
// <Spinner animation="grow" />

// // Customizing spinners

// // Variant(color)
// <Spinner animation="border" variant="primary" />
// <Spinner animation="grow" variant="success" />

// // Size
// <Spinner animation="border" size="sm" />   // Small
// <Spinner animation="border" />            // Default


// // With text
// <>
//   <Spinner animation="border" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </Spinner>
//   <span> Loading data...</span>
// </>


// // Centered spinner (Full page)
// <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//   <Spinner animation="border" variant="primary" />
// </div>


// // Button with spinner (Loading state)
// <Button variant="primary" disabled>
//   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//   {' '}Loading...
// </Button>

// 🧠 Tips
//     Use role="status" and visually-hidden text for accessibility.
//     You can combine spinners with conditionals (isLoading state) for dynamic loading behavior.


// Spinner While Fetching Data
// 🎯 Goal:
//     Show a spinner while simulating data fetch
//     Once loaded, show the actual data

// import React, { useState, useEffect } from 'react';
// import { Spinner, Button, Card } from 'react-bootstrap';

// function DataLoader() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);

//   // Simulate fetching data (e.g. from API)
//   useEffect(() => {
//     setTimeout(() => {
//       setData({
//         title: "FlickFlock Movies",
//         description: "Your favorite movie library.",
//       });
//       setIsLoading(false);
//     }, 3000); // Simulate 3 seconds fetch
//   }, []);

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       {isLoading ? (
//         <>
//           <Spinner animation="border" role="status" variant="primary" />
//           <span className="ms-2">Loading...</span>
//         </>
//       ) : (
//         <Card style={{ width: '22rem' }}>
//           <Card.Body>
//             <Card.Title>{data.title}</Card.Title>
//             <Card.Text>{data.description}</Card.Text>
//             <Button variant="success">Explore</Button>
//           </Card.Body>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default DataLoader;

// isLoading controls the display of the spinner.
// useEffect simulates a fetch with setTimeout.
// Once loading is done, a Card is shown with data.