import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { FormInput, SectionTitle } from "../../components";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="align-page">
      <SectionTitle text='profile' />
      <div className="grid md:grid-cols-3 md:gap-4">
        <FormInput
          type='text'
          name='name'
          value={userData.name}
          handleChange={handleChange}
        />
        <FormInput
          type='text'
          name='lastName'
          labelText='last name'
          value={userData.lastName}
          handleChange={handleChange}
        />
        <FormInput
          type='email'
          name='email'
          value={userData.email}
          handleChange={handleChange}
        />
        <FormInput
          type='text'
          name='location'
          value={userData.location}
          handleChange={handleChange}
        />
        <div className="pt-5 md:pt-0 md:content-end">
          <button
            type="submit"
            className="btn btn-primary btn-block capitalize"
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Profile