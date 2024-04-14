// import { Link, useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
import error from '../images/error.svg';


const Error = () => {
  // const error = useRouteError();
  // console.log(error);

  // if (error.status === 404) {
  //   return (
  //     <main className="grid min-h-[100vh] place-items-center px-8">
  //       <div className="text-center">
  //         <p className="text-9xl font-semibold text-primary">404</p>
  //         <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
  //           page not found
  //         </h1>
  //         <p className="mt-6 text-lg leading-7">
  //           Sorry, we could not find the page you are looking for. 
  //         </p>
  //         <div className="mt-10">
  //           <Link to='/' className="btn btn-accent">
  //             go back
  //           </Link>
  //         </div>
  //       </div>
  //     </main>
  //   )
  // }
  
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <img src={error} alt="error page" className="w-96"/>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Ohh! Page not found
        </h1>
        <p className="mt-6 text-lg leading-7 tracking-tighter">
          Sorry, we could not find the page you are looking for. 
        </p>
        <div className="mt-10">
          <Link to='/' className="btn btn-accent">
            go back
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error