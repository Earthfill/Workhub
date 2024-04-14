import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <div className="shadow-sm md:max-w-full rounded-md bg-white">
      <header className="flex gap-4 border-b w-full p-5">
        <div className="btn btn-primary text-3xl">{company.charAt(0)}</div>
        <div>
          <h5>{position}</h5>
          <p className="text-accent">{company}</p>
        </div>
      </header>
      <div className="pl-5 py-5">
        <div className="grid md:grid-cols-2 gap-3">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`w-fit h-fit button-style ${status === 'declined' ? 'bg-red-200 text-red-700' : status === 'pending' ? 'bg-yellow-200 text-yellow-700' : status === 'fulfilled' ? 'bg-green-500 text-green-700' : ''}`}>{status}</div>
          <footer>
            <div className="flex gap-3">
              <Link
                to='/add-job'
                onClick={() => dispatch(
                  setEditJob({ editJobId: _id, position, company, jobLocation, jobType, status })
                )}
                className="bg-green-200 text-green-700 button-style"
              >
                Edit
              </Link>
              <button 
                type="button"
                onClick={() => dispatch(deleteJob(_id))}
                className="bg-red-200 text-red-700 button-style"
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Job