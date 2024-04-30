import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { changePage } from '../features/allJobs/allJobsSlice';

const PageButtonContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className='mt-5 flex justify-end gap-x-3 text-primary'>
      <button onClick={prevPage} className='flex items-center gap-x-2 md:gap-x-3 md:p-3 p-2 bg-white hover:bg-primary hover:text-white font-semibold rounded-md'>
        <HiChevronDoubleLeft /> 
        Prev
      </button>
      <div className=''>
        {pages.map((pageNumber) => {
          return (
            <button 
              type="button"
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
              className={`${pageNumber === page ? 'bg-primary text-white' : ''} p-[9px] md:py-3 md:px-5 bg-green-200 text-primary font-bold rounded-md`}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button onClick={nextPage} className='flex items-center gap-x-2 md:gap-x-3 md:p-3 p-2 bg-white hover:bg-primary hover:text-white font-semibold rounded-md'>
        <HiChevronDoubleRight /> 
        Next
      </button>
    </div>
  )
}

export default PageButtonContainer