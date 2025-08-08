// 🧭 What Is a ProgressBar?

// The ProgressBar component visually represents the 
// progress of a task. It can be animated, striped, stacked, 
// and can show a label or custom content.

// // Basic usage
// import { ProgressBar } from 'react-bootstrap';

// function BasicProgress() {
//   return <ProgressBar now={60} />;
// }

// // Add label
// <ProgressBar now={60} label={`${60}%`} />

// // Variant colors
// <>
//   <ProgressBar variant="success" now={40} label="Success" />
//   <ProgressBar variant="info" now={60} label="Info" />
//   <ProgressBar variant="warning" now={80} label="Warning" />
//   <ProgressBar variant="danger" now={90} label="Danger" />
// </>


// // Stripped and animated
// <>
//   <ProgressBar striped now={45} />
//   <ProgressBar animated now={60} />
// </>
// <ProgressBar striped animated variant="info" now={75} label="Loading..." />


// // Controlled Progress
// const [progress, setProgress] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setProgress((prev) => (prev < 100 ? prev + 10 : 100));
//   }, 500);

//   return () => clearInterval(interval);
// }, []);

// return <ProgressBar animated now={progress} label={`${progress}%`} />;

// // Progress bar intergration with forms
// import { useState } from 'react';
// import { Form, Button, ProgressBar, Container } from 'react-bootstrap';

// // Structure overview
// function MultiStepForm() {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   const progress = (step / 3) * 100;

//   return (
//     <Container className="mt-5">
//       <h3 className="mb-4">Multi-Step Form</h3>

//       <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />

//       <Form>
//         {step === 1 && (
//           <>
//             <Form.Group className="mb-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your first name" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your last name" />
//             </Form.Group>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <Form.Group className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control type="tel" placeholder="Enter your phone number" />
//             </Form.Group>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Choose a password" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control type="password" placeholder="Confirm password" />
//             </Form.Group>
//           </>
//         )}

//         <div className="d-flex justify-content-between mt-4">
//           <Button variant="secondary" onClick={prevStep} disabled={step === 1}>
//             Back
//           </Button>
//           {step < 3 ? (
//             <Button variant="primary" onClick={nextStep}>
//               Next
//             </Button>
//           ) : (
//             <Button variant="success" type="submit">
//               Submit
//             </Button>
//           )}
//         </div>
//       </Form>
//     </Container>
//   );
// }
