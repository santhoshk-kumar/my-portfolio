import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

const Contact = ({ formspreeEndpoint }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box
        component="form"
        action={formspreeEndpoint} // Replace with your Formspree form ID
        method="POST"
        sx={{ mt: 2 }}
      >
        <TextField
          fullWidth
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          name="message"
          label="Message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
          Message Sent Successfully!
        </Alert>
      </Snackbar>
      </>
  );
};

export default Contact;