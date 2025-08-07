// // An Accordion is a vertically stacked list of items, where each item can be expanded or collapsed
// // to show or hide content. It’s perfect for organizing content in a compact space, such as:
// //     FAQs
// //     Settings panels
// //     Collapsible lists or forms
// //     Multi-step instructions


// // component structure
// <Accordion>                  // Parent wrapper
//   <Accordion.Item>          // Each collapsible section
//     <Accordion.Header />    // Clickable title
//     <Accordion.Body />      // Hidden/revealed content
//   </Accordion.Item>
// </Accordion>



// // Basic initialization
// // import { Accordion } from 'react-bootstrap';

// <Accordion defaultActiveKey="0">
//   <Accordion.Item eventKey="0">
//     <Accordion.Header>Section 1</Accordion.Header>
//     <Accordion.Body>This is the first section.</Accordion.Body>
//   </Accordion.Item>
// </Accordion>


// // Multiple section open
// <Accordion alwaysOpen>
//   <Accordion.Item eventKey="0">
//     <Accordion.Header>Open 1</Accordion.Header>
//     <Accordion.Body>This can stay open.</Accordion.Body>
//   </Accordion.Item>
//   <Accordion.Item eventKey="1">
//     <Accordion.Header>Open 2</Accordion.Header>
//     <Accordion.Body>This can stay open too.</Accordion.Body>
//   </Accordion.Item>
// </Accordion>
