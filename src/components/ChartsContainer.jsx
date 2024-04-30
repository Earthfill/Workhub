import { useState } from "react"
import { useSelector } from "react-redux";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <div className="text-center mt-10">
      <h4 className="text-2xl">Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)} className="text-primary text-xl font-semibold mt-4">
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChartComponent data={data} />}
    </div>
  )
}

export default ChartsContainer