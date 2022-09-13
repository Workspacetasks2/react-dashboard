import React from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
      navigate("home");
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <div>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 15 }}
        id="login-form"
        textAlign="center"
      >
        <h4 style={{ fontSize: 35 }}>Login</h4>
        <TextField
          style={{ width: "40% " }}
          margin="normal"
          required
          type="email"
          id="email"
          name="email"
          label="Email Address"
        />
        <br />
        <TextField
          style={{ width: "40%" }}
          margin="normal"
          required
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default Login;
