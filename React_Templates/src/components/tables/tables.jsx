// // imports
// import { Table } from 'react-bootstrap';


// // Basic table
// <Table>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Name</th>
//       <th>Email</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Remo</td>
//       <td>remo@example.com</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Alex</td>
//       <td>alex@example.com</td>
//     </tr>
//   </tbody>
// </Table>

// // Table styles
// <Table striped bordered hover responsive variant="dark">
//   {/* ... same structure */}
// </Table>

// striped: alternate row colors
// bordered: adds borders to cells
// hover: highlight row on hover
// responsive: makes it scroll on smaller screens
// variant="dark": dark mode styling

// // Dynamic tables from data
// const users = [
//   { id: 1, name: "Remo", email: "remo@example.com" },
//   { id: 2, name: "Alex", email: "alex@example.com" },
// ];

// <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Name</th>
//       <th>Email</th>
//     </tr>
//   </thead>
//   <tbody>
//     {users.map((user, index) => (
//       <tr key={user.id}>
//         <td>{index + 1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//       </tr>
//     ))}
//   </tbody>
// </Table>

// // Action button in table rows
// <tbody>
//   {users.map((user, index) => (
//     <tr key={user.id}>
//       <td>{index + 1}</td>
//       <td>{user.name}</td>
//       <td>{user.email}</td>
//       <td>
//         <Button variant="warning" size="sm" className="me-2">Edit</Button>
//         <Button variant="danger" size="sm">Delete</Button>
//       </td>
//     </tr>
//   ))}
// </tbody>


// // Conditional rendering
// <tr key={user.id} className={user.email.includes("admin") ? "table-danger" : ""}>

// For example, highlight users with specific conditions:
// You can use Bootstrap’s table-* classes:
//     table-success, table-danger, table-warning, etc.


// {/* Filtering search bar */}
// const [search, setSearch] = useState("");

// const filteredUsers = users.filter(u =>
//   u.name.toLowerCase().includes(search.toLowerCase()) ||
//   u.email.toLowerCase().includes(search.toLowerCase())
// );

// <Form.Control
//   type="text"
//   placeholder="Search users..."
//   className="mb-3"
//   onChange={(e) => setSearch(e.target.value)}
// />

// {/* Responsive */}
// <Table responsive>
