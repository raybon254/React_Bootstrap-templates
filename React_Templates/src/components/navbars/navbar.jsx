// A Navbar is a responsive, mobile-friendly navigation bar that supports:
//     Brand/logo
//     Navigation links (horizontal or collapsible)
//     Dropdowns
//     Toggles for mobile view
//     Custom buttons (e.g., login/logout)
//     Placement: fixed-top, fixed-bottom, sticky

// // imports
// import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';


// // Basic example
// function MyNavbar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">MyApp</Navbar.Brand>
//         <Navbar.Toggle aria-controls="main-navbar" />
//         <Navbar.Collapse id="main-navbar">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>

//             <NavDropdown title="More" id="nav-dropdown">
//               <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Button variant="outline-primary">Login</Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


// // Component breakdown
// 📚 Component Breakdown
// 🏷 Navbar

//     Wrapper for the entire navbar

//     Props:

//         bg="light" – background (light, dark, primary, etc.)

//         expand="lg" – when to collapse (sm, md, lg, xl)

//         variant="light" – text color style

// 📦 Container
//     Wraps content inside navbar for alignment and padding

// 💼 Navbar.Brand
//     Used for app name or logo, typically links to homepage

// 🔄 Navbar.Toggle
//     Hamburger menu icon shown on small screens
//     Controls the visibility of the collapsible content

// 📦 Navbar.Collapse
//     Wraps the nav links; collapses into the hamburger menu

// 🔗 Nav
//     Contains nav links (Nav.Link) and dropdowns
//     Props like className="me-auto" push other items to the right (like a login button)

// 🔗 Nav.Link
//     Individual navigation links inside the navbar

// 🔽 NavDropdown
//     Dropdown inside the navigation, with nested NavDropdown.Item

// 🔘 Button
//     Can be placed at the end for login/logout, sign-up, etc.

// 📱 Mobile Responsiveness
//     Navbar.Toggle + Navbar.Collapse makes the navbar responsive.
//     On small screens, links collapse into a menu (hamburger).
//     Clicking the toggle expands/collapses the nav links.


// // fixed and sticky customization
// <Navbar fixed="top" />
// <Navbar sticky="top" />


// // User Avatart in Navbar
// import { Navbar, Nav, Container, Image } from 'react-bootstrap';

// function NavbarWithAvatar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#">FlickFlock</Navbar.Brand>
//         <Nav className="ms-auto">
//           <Nav.Link href="#profile">
//             <Image
//               src="https://via.placeholder.com/32"
//               roundedCircle
//               alt="User"
//               style={{ width: '32px', height: '32px' }}
//             />
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarWithAvatar;

// // Notifications Drop Down
// import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
// import { Bell } from 'react-bootstrap-icons';

// function NavbarWithNotifications() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#">FlickFlock</Navbar.Brand>
//         <Nav className="ms-auto">
//           <Dropdown align="end">
//             <Dropdown.Toggle variant="light" id="dropdown-notifications">
//               <Bell />
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">New comment on your post</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">New follower</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">System update available</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarWithNotifications;

// // Dark/Light mode toggle
// import { useState } from 'react';
// import { Navbar, Container, Button } from 'react-bootstrap';

// function NavbarThemeToggle() {
//   const [dark, setDark] = useState(false);

//   return (
//     <Navbar bg={dark ? 'dark' : 'light'} variant={dark ? 'dark' : 'light'}>
//       <Container>
//         <Navbar.Brand href="#">FlickFlock</Navbar.Brand>
//         <Button
//           variant={dark ? 'outline-light' : 'outline-dark'}
//           onClick={() => setDark(!dark)}
//           className="ms-auto"
//         >
//           Toggle {dark ? 'Light' : 'Dark'}
//         </Button>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarThemeToggle;


// // How to apply a global Dark/Light theme
// // Define global styles in css
// /* index.css */
// body.light-mode {
//   background-color: #ffffff;
//   color: #000000;
// }

// body.dark-mode {
//   background-color: #1c1c1c;
//   color: #f0f0f0;
// }


// // Update components to toggle body class
// import { useEffect, useState } from 'react';
// import { Navbar, Container, Button } from 'react-bootstrap';

// function NavbarThemeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', dark);
//     document.body.classList.toggle('light-mode', !dark);
//   }, [dark]);

//   return (
//     <Navbar bg={dark ? 'dark' : 'light'} variant={dark ? 'dark' : 'light'}>
//       <Container>
//         <Navbar.Brand href="#">FlickFlock</Navbar.Brand>
//         <Button
//           variant={dark ? 'outline-light' : 'outline-dark'}
//           onClick={() => setDark(!dark)}
//           className="ms-auto"
//         >
//           Toggle {dark ? 'Light' : 'Dark'}
//         </Button>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarThemeToggle;
