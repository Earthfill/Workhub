import { useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import logo from '../images/logo.svg';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    };

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    };
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);

  return (
    <section className="h-screen grid place-items-center">
      <form onSubmit={onSubmit} className="card w-80 md:w-2/5 2xl:w-1/5 md:p-16 p-5 bg-base-100 shadow-lg flex flex-col border border-t-primary border-t-4">
        <img src={logo} alt="workhub" className="w-full h-28 -mt-5" />
        <h3 className="text-center text-2xl font-semibold">
          {values.isMember ? 'Login' : 'Register'}
        </h3>
        {!values.isMember && (
          <FormInput
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormInput
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          />
        <FormInput
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary text-base-100 w-full py-3 capitalize rounded-md mb-3"
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'submit'}
          </button>
          <button
            type="submit"
            className="bg-green-200 text-green-700 w-full py-3 capitalize rounded-md"
            disabled={isLoading}
            onClick={() => dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )}
          >
            {isLoading ? 'loading...' : 'demo app'}
          </button>
          <p className="text-center mt-3 flex gap-x-1 justify-center">
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button
              type="submit"
              className="text-primary"
              onClick={toggleMember}
            >
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </form>
    </section>
  )
}

export default Register