// // import an basic implementation
// import { Modal, Button } from 'react-bootstrap';
// import { useState } from 'react';

// function MyModal() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setShow(true)}>
//         Launch Modal
//       </Button>

//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           Woohoo, you’re reading this text in a modal!
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => alert('Saved')}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default MyModal;


// // subcomponents
// | Component      | Description                                  |
// | -------------- | -------------------------------------------- |
// | `Modal`        | Container for the modal                      |
// | `Modal.Header` | Title section, can include `closeButton`     |
// | `Modal.Body`   | Main content of the modal                    |
// | `Modal.Footer` | Buttons or actions (usually "Close", "Save") |
// | `show` prop    | Controls visibility                          |
// | `onHide` prop  | Called when modal is closed                  |


// // Custom sizes
// <Modal size="lg" show={show} onHide={...}>...</Modal>  // Large
// <Modal size="sm" show={show} onHide={...}>...</Modal>  // Small

// // Vertically centered
// <Modal centered show={show} onHide={...}>...</Modal>

// // Static backdrop
// <Modal backdrop="static" keyboard={false} show={show} onHide={...}>

// {/* Scrolling modals */}
// <Modal scrollable show={show} onHide={...}>...</Modal>




// {/* FORM  MODAL */}
// import { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function FormModal() {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//     setShow(false);
//   };

//   return (
//     <>
//       <Button onClick={() => setShow(true)}>Open Form Modal</Button>

//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Fill the Form</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 placeholder="Enter your name"
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 placeholder="Enter your email"
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShow(false)}>
//               Cancel
//             </Button>
//             <Button type="submit" variant="primary">
//               Submit
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// }

// export default FormModal;

//  {/* CONFIRM BUTTON */}
//  import { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// function ConfirmModal() {
//   const [show, setShow] = useState(false);

//   const handleConfirm = () => {
//     console.log("Confirmed!");
//     setShow(false);
//   };

//   return (
//     <>
//       <Button variant="danger" onClick={() => setShow(true)}>
//         Delete Item
//       </Button>

//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Are you sure?</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           This action is irreversible. Do you really want to delete?
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleConfirm}>
//             Yes, Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ConfirmModal;


// {/* Form structure recap */}
// <Modal show={show} onHide={() => setShow(false)}>
//   <Modal.Header closeButton>
//     <Modal.Title>Title Goes Here</Modal.Title>
//   </Modal.Header>

//   <Form onSubmit={handleSubmit}>
//     <Modal.Body>
//       <Form.Group>
//         <Form.Label>Label</Form.Label>
//         <Form.Control ... />
//       </Form.Group>
//     </Modal.Body>

//     <Modal.Footer>
//       <Button onClick={() => setShow(false)}>Cancel</Button>
//       <Button type="submit">Submit</Button>
//     </Modal.Footer>
//   </Form>
// </Modal>
//  All parts work together like this:
//     Form wraps around Modal.Body and Modal.Footer
//     Inside Form, there are one or more Form.Group blocks with input fields
//     Submit button is placed in Modal.Footer with type="submit" to trigger form submission
//     Cancel or Close buttons use onClick={() => setShow(false)} or rely on the modal’s onHide