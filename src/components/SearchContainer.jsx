import { useDispatch, useSelector } from "react-redux"
import SectionTitle from "./SectionTitle"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";
import { useMemo, useState } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  
  const handleSearch = (event) => {
    dispatch(handleChange({ name: event.target.name, value: event.target.value }));
  };

  const debounce = () => {
    let timeoutID;
    return (event) => {
      setLocalSearch(event.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: event.target.name, value: event.target.value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  return (
    <div className="align-page">
      <form>
        <SectionTitle text='Search Form' />
        <div className="md:grid md:grid-cols-3 gap-4">
          <FormInput 
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          <FormSelect
            name='searchStatus'
            label='search status'
            value={searchStatus}
            list={['all', ...statusOptions]}
            handleChange={handleSearch}
          />
          <FormSelect
            name='searchType'
            label='search type'
            value={searchType}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          <FormSelect
            name='sort'
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
            className="mt-4 w-full button-style p-3 bg-gray-700 text-white capitalize hover:bg-black hover:text-white rounded-md"
          >
            <span>Clear Filters</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchContainer