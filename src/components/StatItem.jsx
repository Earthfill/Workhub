const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <div>
      <header>
        <span>{count}</span>
        <span>{icon}</span>
      </header>
      <h5>{title}</h5>
    </div>
  )
}

export default StatItem