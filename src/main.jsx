import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
     {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('featureds.json')
     },
     {
      path: "/statistics",
      element: <Statistics></Statistics>
     },
     {
      path: "/appliedJobs",
      element: <AppliedJobs></AppliedJobs>
     },
     {
      path: "/blog",
      element: <Blog></Blog>
     },
     {
      path: "jobDetails/:jobDetailsId",
      element: <JobDetails></JobDetails>,
    
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
