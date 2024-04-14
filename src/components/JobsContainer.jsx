import { useDispatch, useSelector } from "react-redux"
import Job from "./Job";
import Loading from "./Loading";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import SectionTitle from "./SectionTitle";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [])

  if (isLoading) {
    return <Loading />
  }

  // if (jobs.length === 0) {
  //   return <h2>No jobs to display...</h2>
  // }

  return (
    <div className="">
      <h3>jobs info</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job) => {
          return <Job key={job._id} { ...job } />
        })}
      </div>
    </div>
  )
}

export default JobsContainer