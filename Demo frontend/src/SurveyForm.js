import React, { useState } from "react";

function SurveyForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
    feedback: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey Data:", formData);
    alert("Survey submitted successfully!");
  };

  return (
    <div style={{width:"400px", margin:"auto"}}>
      <h2>Customer Survey Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label><br/>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Email:</label><br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Age:</label><br/>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        /><br/><br/>

        <label>How satisfied are you?</label><br/>
        <select
          name="satisfaction"
          value={formData.satisfaction}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Unsatisfied">Unsatisfied</option>
        </select>

        <br/><br/>

        <label>Feedback:</label><br/>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        <br/><br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default SurveyForm;