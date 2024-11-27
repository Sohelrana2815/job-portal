import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);

export default router;
