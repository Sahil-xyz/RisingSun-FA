import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you have routing set up
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(Array(6).fill("")); // Array for OTP input (6 characters)
  const [loading, setLoading] = useState(false); // Loading state to disable the submit button while waiting for the response
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success messages
  const navigate = useNavigate(); // For redirecting on success, if needed

  // Handle input changes
  const handleInput = (e) => {
    const { value, maxLength, name } = e.target;
    const index = parseInt(name);

    if (value.length <= maxLength) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    const otpCode = otp.join("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/v1/user/verifyEmail`, { code: otpCode });

      if (response.data.success) {
        navigate("/login");
        toast.success("Email Verified Successfully...!")
      } else {
        setErrorMessage(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to verify email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle key down for only numeric inputs
  const handleKeyDown = (e) => {
    if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };

  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container max-w-md mx-auto mt-32">
        <h2 className="text-2xl font-semibold text-center">Verify Your Email</h2>
        <form
          onSubmit={handleSubmit}
          id="otp-form"
          className="flex flex-col gap-4 items-center mt-6"
        >
          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                name={index.toString()}
                maxLength={1}
                value={digit}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
              />
            ))}
          </div>

          {errorMessage && (
            <div className="text-red-500 mt-3 text-center">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 mt-3 text-center">{successMessage}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
