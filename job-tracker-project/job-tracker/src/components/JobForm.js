import { useState } from "react";

export default function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState(""); 
  const [status, setStatus] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) return;
    addJob({ title, company, date, status: "Applied" });
    setTitle("");
    setDate(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" />
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
      <label for="date-input">Select Date: </label>
      <input type="date" id="date-input" name="selected_date" value={date} onChange={e => setDate(e.target.value)}></input>
      <input value={status} onChange={e => setStatus(e.target.value)} placeholder="Status"></input>
      <button type="submit">Add Job</button>
    </form>
  );
}
