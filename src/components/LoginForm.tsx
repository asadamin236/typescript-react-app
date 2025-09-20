import React, { useState, SyntheticEvent } from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";
import TextField from '@mui/material/TextField';

// Move these OUTSIDE the component
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: black;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log("Current password state:", password); 
    localStorage.setItem("loginData", JSON.stringify({ email, password }));
    const data = JSON.parse(localStorage.getItem("loginData") || "{}");
    console.log("Saved to localStorage:", data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg- black-800">
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "white" }}>Login</h2>

        <div className="mb-4">
          <TextField
            id="outlined-basic"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            fullWidth
            margin="normal"
            color="secondary"
            size="medium"
          />
        </div>

        <div className="mb-6">
          <TextField
            id="outlined-password"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            fullWidth
            margin="normal"
            color="secondary"
            size="medium"
          />
        </div>

        {/* <Button type="submit" variant="contained" style={{ width: "100%" }}>Submit</Button> */}
        <button
          type="submit"
          className="w-full h-12 px-6 mt-2 font-semibold rounded-lg shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;