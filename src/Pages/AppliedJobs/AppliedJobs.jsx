import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/SavedAppliedJobs/SavedAppliedJobs";
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

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
      // console.log(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        Jobs I applied: {appliedJobs.length}
      </h2>
      <div className="max-w-screen-2xl space-y-4 p-6">
        {appliedJobs.map((job) => (
          <AppliedJobsCard key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
