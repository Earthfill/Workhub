// import { customFetch } from "../utils";
import { Link } from 'react-router-dom';
import hero from '../images/hero.svg';
import logo from '../images/logo.svg';

// const url='/products?featured=true';

// const featuredProductsQuery = {
//   queryKey: ['featuredProducts'],
//   queryFn: () => customFetch(url)
// };

// export const loader = (queryClient) => async () => {
    // const response = await queryClient.ensureQueryData(featuredProductsQuery);
    // const products = response.data.data;

    // return { products };
//     return null;
// }

const Landing = () => {
  return (
    <main className='align-element'>
      <nav className='bg-white w-48 -ml-6 md:ml-[75px]'>
        <img src={logo} alt="workhub logo" className='rounded-lg'/>
      </nav>
      <div className='grid md:grid-cols-2 items-center md:ml-24 py-16'>
        {/* INFO */}
        <article className=''>
          <h1 className='capitalize text-secondary font-semibold text-5xl'>
            job <span className='text-primary'>hunting</span> app
          </h1>
          <p className='my-7 text-sm md:text-base tracking-tight'>
            Discover your dream job from our plethora of up to date jobs and track your application progress with our intuitive job tracking app. 
            Stay organized, stay informed, and land your next career opportunity.
          </p>
          <Link
            to='/auth'
            className='btn btn-primary btn-md'
          >
            Login/Register
          </Link>
        </article>
        <article className='hidden md:block md:-mr-36'>
          <img src={hero} alt="job hunt" className='h-80 lg:w-full' />
        </article>
      </div>
    </main>
  )
}

export default Landing