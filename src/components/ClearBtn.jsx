import { useDispatch } from "react-redux"
import { clearValues } from "../features/job/jobSlice";

const ClearBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(clearValues())}
      className="btn btn-accent btn-block capitalize"
    >
      <span>Clear</span>
    </button>
  )
}

export default ClearBtn