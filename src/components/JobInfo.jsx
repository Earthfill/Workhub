const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-accent">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default JobInfo