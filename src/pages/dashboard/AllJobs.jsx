import { JobsContainer, SearchContainer } from "../../components"

const AllJobs = () => {
  return (
    <div className="grid gap-10">
      <SearchContainer />
      <JobsContainer />
    </div>
  )
}

export default AllJobs