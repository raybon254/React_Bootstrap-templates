// // Import
// import { Dropdown } from 'react-bootstrap';
// import { Dropdown, DropdownButton } from 'react-bootstrap';


// // Basic example
// <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>


// // DropdownButton Variant
// <DropdownButton id="dropdown-basic-button" title="Options" variant="info">
//   <Dropdown.Item href="#/edit">Edit</Dropdown.Item>
//   <Dropdown.Item href="#/delete">Delete</Dropdown.Item>
// </DropdownButton>


// // With icons/custom content
// <Dropdown>
//   <Dropdown.Toggle variant="secondary" id="dropdown-custom">
//     <i className="fas fa-user-circle me-2"></i> Profile
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
//     <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//     <Dropdown.Divider />
//     <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>

// // Alignments options and responsive alignments
// <Dropdown.Menu align="end"> {/* right aligned */}
//   ...
// </Dropdown.Menu>

// <Dropdown.Menu align={{ lg: 'end' }}> {/* Right aligned only on large screens and up */}


// {/* Controlled Dropdown */}
// const [show, setShow] = useState(false);

// <Dropdown show={show} onToggle={() => setShow(!show)}>
//   <Dropdown.Toggle>Menu</Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item onClick={() => setShow(false)}>Close Me</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// </Dropdown.Menu>


// // Mapping item
// const options = ["Edit", "Share", "Delete"];

// <DropdownButton title="Actions">
//   {options.map((option, i) => (
//     <Dropdown.Item key={i}>{option}</Dropdown.Item>
//   ))}
// </DropdownButton>


// // Subcomponents
// | Component           | Description                        |
// | ------------------- | ---------------------------------- |
// | `<Dropdown>`        | Generic dropdown with full control |
// | `<Dropdown.Toggle>` | The button users click             |
// | `<Dropdown.Menu>`   | The dropdown content container     |
// | `<Dropdown.Item>`   | Each selectable option inside      |
// | `<DropdownButton>`  | Shorthand combining toggle & menu  |
