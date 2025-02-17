import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ScheduleLecture = () => {
  const [lecture, setLecture] = useState({ topic: "", description: "", date: "", time: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setLecture({ ...lecture, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/lecture/create", lecture, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      navigate("/creatorss");
    } catch (error) {
      console.error("Error scheduling lecture:", error);
    }
  };

  return (
    <div>
      <h2>Schedule Live Lecture</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" placeholder="Topic" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Create Lecture</button>
      </form>
    </div>
  );
};

export default ScheduleLecture;
