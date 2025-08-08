// 🔔 What Are Toasts?
// Toasts are brief messages that pop up to 
// notify the user about a process or event. 
// They usually disappear after a few seconds 
// or can be dismissed manually.

// // Basic setup
// import React, { useState } from 'react';
// import { Button, Toast, ToastContainer } from 'react-bootstrap';

// function ToastExample() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setShow(true)} variant="primary">
//         Show Toast
//       </Button>

//       <ToastContainer position="top-end" className="p-3">
//         <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="info">
//           <Toast.Header closeButton>
//             <strong className="me-auto">FlickFlock</strong>
//             <small>Now</small>
//           </Toast.Header>
//           <Toast.Body className="text-white">Movie added to favorites!</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </>
//   );
// }

// export default ToastExample;


// // Breakdown
// show: State controls whether the toast is visible.
// autohide: Automatically hides the toast after delay ms (3000ms = 3s).
// ToastContainer: Positions the toast on screen (top-end, top-center, etc.).
// bg="info": Sets the background color (primary, success, danger, warning, info, dark, etc.).
// Toast.Header and Toast.Body: Separate the title/header and body content.

// | Prop       | Description                         |
// | ---------- | ----------------------------------- |
// | `show`     | Boolean – controls visibility       |
// | `onClose`  | Function to handle manual close     |
// | `autohide` | Automatically hides after delay     |
// | `delay`    | Time in ms before autohide triggers |
// | `bg`       | Background theme                    |

// 🎯 Use Cases:

//     ✅ Success after submitting a form
//     ⚠️ Error messages
//     📥 New incoming messages/notifications
//     🧾 Alerts about saved/updated/deleted records