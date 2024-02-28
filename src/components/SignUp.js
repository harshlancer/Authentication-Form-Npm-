import React, { useState } from "react";

const SignUpForm = ({
  emailLabel = "Email",
  passwordLabel = "Password",
  confirmPasswordLabel = "Confirm Password",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setError("");
    onSubmit({ email, password });
    // Reset form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>{emailLabel}:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>{passwordLabel}:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>{confirmPasswordLabel}:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </form>
  );
};

export { SignUpForm };
