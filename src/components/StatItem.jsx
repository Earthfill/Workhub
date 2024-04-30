const StatItem = ({ count, title, icon, color, bcg }) => {
  const containerStyle = {
    borderBottom: `4px solid ${color}`,
  };

  const countStyle = {
    color: color
  };

  const iconStyle = {
    backgroundColor: bcg,
    color: color
  }

  return (
    <div className="align-page md:flex-1" style={containerStyle}>
      <header className="flex items-center justify-between">
        <span className="text-5xl font-bold" style={countStyle}>{count}</span>
        <span className="px-6 py-4 text-3xl" style={iconStyle}>{icon}</span>
      </header>
      <h5 className="capitalize pt-5 text-xl tracking-normal text-slate-600">{title}</h5>
    </div>
  )
}

export default StatItem