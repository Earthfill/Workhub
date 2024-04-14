import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { ClearBtn, FormInput, FormSelect, SectionTitle } from "../../components";
import { createJob, editJob, handleChange } from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {
  const { isLoading, position, company, jobLocation, jobTypeOptions, jobType, statusOptions, status, isEditing, editJobId } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    // if (isEditing) {
    //   dispatch(editJob({
    //       jobId: editJobId,
    //       job: { position, company, jobLocation, jobType, status }
    //     })
    //   );
    //   return;
    // }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <form className="align-page">
      <SectionTitle text={isEditing ? 'edit job' : 'add job'} />
      <div className="page-grid  overflow-y-auto max-h-96">
        <FormInput
          type='text'
          name='position'
          value={position}
          handleChange={handleJobInput}
        />
        <FormInput
          type='text'
          name='company'
          value={company}
          handleChange={handleJobInput}
        />
        <FormInput
          type='text'
          name='jobLocation'
          labelText='job location'
          value={jobLocation}
          handleChange={handleJobInput}
        />
        <FormSelect
          name='status'
          value={status}
          list={statusOptions}
          handleChange={handleJobInput}
          />
        <FormSelect
          name='jobType'
          value={jobType}
          list={jobTypeOptions}
          handleChange={handleJobInput}
        />
        <div className="grid grid-cols-2 gap-4 md:content-end pt-5 md:pt-0">
          <ClearBtn />
          <button
            type="submit"
            className="btn btn-primary btn-block capitalize"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddJob