
export default function JobItem({ job, onDelete, onStatusChange }) {
  return (
    <li>
      <strong>{job.title}</strong> at {job.company} — Applied on {job.date}
      <br/>
      <strong>Status: </strong> {job.status}
       <br/>
      <select value={job.status} onChange={e => onStatusChange(job.id, e.target.value)}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offered</option>
        <option>Rejected</option>
      </select>
      <button onClick={() => onDelete(job.id)}>Delete</button>
      <button>Edit</button>
    </li>
  );
}
