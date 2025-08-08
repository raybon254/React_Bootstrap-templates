// {/* <Image> is a wrapper around the regular <img> tag with Bootstrap styling applied.
// You get:
//     Responsive scaling (fluid)
//     Rounded corners (rounded)
//     Circular cropping (roundedCircle)
//     Thumbnail borders (thumbnail)

// {/* import */}
// import { Image } from 'react-bootstrap';


// {/* basic usage */}
// <Image src="https://via.placeholder.com/150" />


// {/* Common props */}
// | Prop            | Description                                       |
// | --------------- | ------------------------------------------------- |
// | `src`           | Image URL                                         |
// | `alt`           | Alternative text                                  |
// | `fluid`         | Makes image scale with its parent (`width: 100%`) |
// | `rounded`       | Applies `border-radius: .25rem`                   |
// | `roundedCircle` | Makes image circular                              |
// | `thumbnail`     | Adds a border & padding like a thumbnail          |
// | `className`     | Add extra Bootstrap or custom classes             |


// {/* Fluid */}
// <Image src="https://via.placeholder.com/600x200" fluid />

// {/* rounded */}
// <Image src="https://via.placeholder.com/150" rounded />

// {/* roundedcirlce */}
// <Image src="https://via.placeholder.com/150" roundedCircle />

// {/* thumbnail */}
// <Image src="https://via.placeholder.com/150" thumbnail />

// {/* image&card combination */}
// <Card style={{ width: '18rem' }}>
//   <Card.Body className="text-center">
//     <Image
//       src="https://via.placeholder.com/100"
//       roundedCircle
//       fluid
//       className="mb-3"
//     />
//     <Card.Title>Remo Brian</Card.Title>
//     <Card.Text>Frontend Developer at FlickFlock</Card.Text>
//   </Card.Body>
// </Card>


// {/* IMAGE OVERLAYS */}
// {/* import */}
// import { Card } from 'react-bootstrap';

// {/* text overlay on card image */}
// <Card className="bg-dark text-white">
//   <Card.Img src="https://via.placeholder.com/600x250" alt="Card image" />
//   <Card.ImgOverlay>
//     <Card.Title>Overlay Title</Card.Title>
//     <Card.Text>
//       This is text on top of the image. Useful for call-to-action areas.
//     </Card.Text>
//   </Card.ImgOverlay>
// </Card>

// Card.ImgOverlay auto positions the content using position-absolute inside the card.
// The parent <Card> must have a background to ensure text contrast (e.g., bg-dark text-white).


// {/* Custom overlay with position-absolute */}
// <div className="position-relative text-white">
//   <img
//     src="https://via.placeholder.com/600x300"
//     alt="..."
//     className="img-fluid"
//   />
//   <div className="position-absolute top-0 start-0 p-3 bg-dark bg-opacity-50 w-100 h-100">
//     <h3>Custom Overlay</h3>
//     <p>This overlay is fully customized and spans the image.</p>
//   </div>
// </div>


// {/* Overlay/Button/Badge */}
// <Card className="text-white">
//   <Card.Img src="https://via.placeholder.com/700x300" alt="Header image" />
//   <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50">
//     <Card.Title>Featured Movie</Card.Title>
//     <Card.Text>
//       Now streaming. <Badge bg="danger">New</Badge>
//     </Card.Text>
//     <button className="btn btn-warning btn-sm mt-2">Watch Now</button>
//   </Card.ImgOverlay>
// </Card> */}
