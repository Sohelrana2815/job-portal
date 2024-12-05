import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/SavedAppliedJobs/SavedAppliedJobs";
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobsApplied = [];

      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);

        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleFilterJobType = (jobType) => {
    if (jobType === "All") {
      setDisplayJobs(appliedJobs);
    } else if (jobType === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (jobType === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  return (
    <>
      {/* Dropdown menu */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white"
        >
          Job Type
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleFilterJobType("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilterJobType("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilterJobType("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">
          Jobs I applied: {appliedJobs.length}
        </h2>
        <div className="max-w-screen-2xl space-y-4 p-6">
          {displayJobs.map((job) => (
            <AppliedJobsCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
