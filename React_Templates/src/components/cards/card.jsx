// A React Bootstrap Card is a flexible container with support for:
//     Titles
//     Images (top, bottom)
//     Headers & Footers
//     Buttons
//     Grid layout


// // importing cards

// import { Card } from 'react-bootstrap';


// // Basc structure
// <Card>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>This is some sample content.</Card.Text>
//   </Card.Body>
// </Card>


// // Full card anatomy
// <Card>
//   <Card.Header>Header Section</Card.Header>
//   <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
//     <Card.Text>This is a text paragraph in the card.</Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
//   <Card.Footer>Footer Section</Card.Footer>
// </Card>


// // Card with styling
// <Card bg="light" text="dark" border="primary" className="mb-4">
//   <Card.Body>
//     <Card.Title>Info Card</Card.Title>
//     <Card.Text>This card uses Bootstrap variants.</Card.Text>
//   </Card.Body>
// </Card>


// // Card with image
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="https://via.placeholder.com/150" />
//   <Card.Body>
//     <Card.Title>Profile</Card.Title>
//     <Card.Text>Some quick example text.</Card.Text>
//   </Card.Body>
// </Card>


// // Card with buttons
// <Card>
//   <Card.Body>
//     <Card.Title>Get Started</Card.Title>
//     <Card.Text>Click below to begin the journey.</Card.Text>
//     <Button variant="primary">Start</Button>
//   </Card.Body>
// </Card>



// // Card in a Grid with Row and Col
// import { Card, Row, Col, Container } from 'react-bootstrap';

// <Container className="mt-4">
//   <Row>
//     {[1, 2, 3].map((num) => (
//       <Col md={4} key={num}>
//         <Card className="mb-4">
//           <Card.Body>
//             <Card.Title>Card {num}</Card.Title>
//             <Card.Text>This is card number {num}.</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
// </Container>


// // Card example with icon + Badge
// import { Badge, Card, Button } from 'react-bootstrap';
// import { Film } from 'react-bootstrap-icons';

// <Card className="text-center">
//   <Card.Body>
//     <Film size={40} />
//     <Card.Title>
//       Movie Title <Badge bg="info">New</Badge>
//     </Card.Title>
//     <Card.Text>Explore the latest trending film.</Card.Text>
//     <Button variant="dark">Watch Now</Button>
//   </Card.Body>
// </Card>

// Film size={40}
// This renders a film icon (from react-bootstrap-icons).
// It's placed above the title, acting as a visual hint or category marker.
// You can substitute it with any other icon like <Play />, <Person />

// // Card sub-components
// | Subcomponent    | Description             |
// | --------------- | ----------------------- |
// | `Card.Body`     | Main content area       |
// | `Card.Title`    | Title                   |
// | `Card.Subtitle` | Subtitle (smaller text) |
// | `Card.Text`     | Body text               |
// | `Card.Img`      | Top or bottom image     |
// | `Card.Header`   | Header above the body   |
// | `Card.Footer`   | Footer below the body   |
// | `Card.Link`     | Styled links            |
