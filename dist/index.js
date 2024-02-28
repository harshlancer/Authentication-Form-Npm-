import React, { useState } from 'react';

const useAuthentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const signUp = async formData => {
    setIsLoading(true);
    setIsLoading(false);
  };
  const signIn = async formData => {
    setIsLoading(true);
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    signUp,
    signIn
  };
};

const useForm = initialValues => {
  const [formData, setFormData] = useState(initialValues);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return {
    formData,
    setFormData,
    handleChange
  };
};

const SignUpForm = ({
  emailLabel = "Email",
  passwordLabel = "Password",
  confirmPasswordLabel = "Confirm Password",
  onSubmit
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setError("");
    onSubmit({
      email,
      password
    });
    // Reset form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      maxWidth: "300px",
      margin: "auto",
      textAlign: "center",
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "5px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      marginRight: "10px"
    }
  }, emailLabel, ":"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    style: {
      padding: "5px",
      borderRadius: "3px",
      border: "1px solid #ccc",
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      marginRight: "10px"
    }
  }, passwordLabel, ":"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    style: {
      padding: "5px",
      borderRadius: "3px",
      border: "1px solid #ccc",
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      marginRight: "10px"
    }
  }, confirmPasswordLabel, ":"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    required: true,
    style: {
      padding: "5px",
      borderRadius: "3px",
      border: "1px solid #ccc",
      width: "100%"
    }
  })), error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red",
      marginBottom: "10px"
    }
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer"
    }
  }, "Sign Up"));
};

export { SignUpForm, useAuthentication, useForm };
