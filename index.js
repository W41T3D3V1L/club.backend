const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = 4589;
const data = require('./data.json');

// Enable CORS
app.use(cors());

// Middleware to enable JSON responses
app.use(express.json());

// Endpoint to get all data
app.get('/api/data', (req, res) => {
  console.log("Request received at /api/data");
  res.json(data);
});

// Specific endpoints for each section
app.get('/api/faculty', (req, res) => {
  console.log("Request received at /api/faculty");
  res.json(data.faculty);
});
app.get('/api/facultyresearch', (req, res) => {
  console.log("Request received at /api/facultyresearch");
  res.json(data.facultyresearch);
});

app.get('/api/students', (req, res) => {
  console.log("Request received at /api/students");
  res.json(data.students);
});


app.get('/api/studentsHackthon', (req, res) => {
    console.log("Request received at /api/studentsHackthon");
    res.json(data.studentsHackthon);
});

app.get('/api/studentsCerti', (req, res) => {
    console.log("Request received at /api/studentsCerti");
    res.json(data.studentsCerti);
});

app.get('/api/studentsProj', (req, res) => {
    console.log("Request received at /api/studentsProj");
    res.json(data.studentsProj);
});

app.get('/api/events', (req, res) => {
  console.log("Request received at /api/events");
  res.json(data.events);
});

app.get('/api/placements', (req, res) => {
  console.log("Request received at /api/placements");
  res.json(data.placements);
});

app.get('/api/contact', (req, res) => {
  console.log("Request received at /api/contact");
  res.json(data.contactInfo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
