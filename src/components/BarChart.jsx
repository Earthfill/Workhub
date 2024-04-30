import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const BarChartComponent = ({ data }) => {
  console.log(data);
  // {date: 'Mar 2022', count: 8}
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill="#19362D" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent