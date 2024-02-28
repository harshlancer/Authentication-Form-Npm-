import { useState } from "react";

const useAuthentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (formData) => {
    setIsLoading(true);
    try {
      // Make API request for sign-up
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const signIn = async (formData) => {
    setIsLoading(true);
    try {
      // Make API request for sign-in
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return { isLoading, error, signUp, signIn };
};

export  {useAuthentication};
