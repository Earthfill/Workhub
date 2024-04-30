import { useDispatch, useSelector } from "react-redux"
import Job from "./Job";
import Loading from "./Loading";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageButtonContainer from "./PageButtonContainer";

const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>
  }

  return (
    <div className="">
      <h3 className="font-semibold capitalize my-3">
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h3>
      <div className="grid lg:grid-cols-2 gap-4">
        {jobs.map((job) => {
          return <Job key={job._id} { ...job } />
        })}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </div>
  )
}

export default JobsContainer