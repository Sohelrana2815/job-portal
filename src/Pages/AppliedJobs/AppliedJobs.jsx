import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/SavedAppliedJobs/SavedAppliedJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(appliedJobs);
    }
  }, [jobs]);
  return <div></div>;
};

export default AppliedJobs;
