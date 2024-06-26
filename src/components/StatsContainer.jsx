import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useSelector } from "react-redux"
import StatItem from "./StatItem";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#E9B949',
      bcg: '#FCEFC7'
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647ACB',
      bcg: '#E0E8F9'
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#D66A6A',
      bcg: '#FFEEEE'
    },
  ];

  return (
    <div className="grid gap-y-5 md:flex md:justify-between md:gap-x-5">
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </div>
  )
}

export default StatsContainer