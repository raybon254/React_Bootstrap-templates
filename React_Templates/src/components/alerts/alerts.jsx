// An Alert is a dismissible message box used to display 
// important messages like:
//     Success or error messages
//     Warnings
//     Informational notes
//     User feedback (e.g., “Booking successful!”)

// Basic structure
import { Alert } from 'react-bootstrap';

<Alert variant="success">
  This is a success alert—check it out!
</Alert>


//  general color in boostrap
// primary	        General info	        Blue
// secondary	    Neutral or muted info	Gray
// success	        Positive action	        Green
// danger	        Error or failure	    Red
// warning	        Caution	                Yellow/Orange
// info	        Informational note	        Light blue
// light	        Subtle message	        Very light gray
// dark	        Stronger neutral	        Black/Gray


// Dismisable alert
// import { Alert } from 'react-bootstrap';
// import { useState } from 'react';

// function DismissibleAlert() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="warning" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>Warning!</Alert.Heading>
//         <p>This action cannot be undone.</p>
//       </Alert>
//     );
//   }
//   return null;
// }



// Code Example

// function FormWithAlert() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <>
//       {submitted && (
//         <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
//           Form submitted successfully!
//         </Alert>
//       )}
//       <Button onClick={() => setSubmitted(true)}>Submit</Button>
//     </>
//   );
// }

