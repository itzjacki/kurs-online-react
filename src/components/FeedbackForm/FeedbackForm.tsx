import React from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const feedback = formData.get("feedback") as string;

    // Sjekk at feedbacktekst ikke er for lang
    if (feedback.length > 100) {
      alert("Feedback too long! Keep it under 100 characters");
    } else {
      alert(`Feedback received from ${name} (${email}):\n${feedback}`);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback">
      <label htmlFor="nameInput">Name:</label>
      <input type="text" name="name" id="nameInput" />

      <label htmlFor="emailInput">Email:</label>
      <input type="email" name="email" id="emailInput" />

      <label htmlFor="feedbackInput" id="feedbackInputLabel">
        Your Feedback:
      </label>
      <textarea name="feedback" id="feedbackInput" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
