import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Error, Landing, ProtectedRoute, Register } from "./pages";
import { SharedLayout, Stats, AllJobs, AddJob, Profile } from "./pages/dashboard";

// import { ErrorElement } from "./components";

// loaders
// import { loader as landingLoader } from './pages/Landing';

// actions
// import { action as registerAction } from "./pages/Register";
// import { action as loginAction } from "./pages/Login";

// import { store } from "./store";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5
//     },
//   },
// });

// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <HomeLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//         errorElement: <ErrorElement />,
//         loader: landingLoader(queryClient)
//       },
//     ],
//   },
//   {
//     path: '/',
//     element: <Landing />,
//     errorElement: <Error />,
//   },
//   {
//     path: 'login',
//     element: <Login />,
//     errorElement: <Error />,
//     action: loginAction(store)
//   },
//   {
//     path: 'register',
//     element: <Register />,
//     errorElement: <Error />,
//     action: registerAction
//   },
// ])

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='auth' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
      // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  )
}

export default App
