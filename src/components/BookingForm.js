import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  // Define state variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement booking logic here (e.g., sending data to a server)
    console.log("Booking submitted:", { name, email, date, message });

    // Reset form fields after submission
    setName("");
    setEmail("");
    setDate("");
    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Booking Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter a message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit"  className="my-3">
        Book Now
      </Button>
    </Form>
  );
};

export default BookingForm;
