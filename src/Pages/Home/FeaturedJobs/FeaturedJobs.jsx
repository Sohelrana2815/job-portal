import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setFeaturedJobs(data))
      .catch((error) => console.error("Error while fetching data", error));
  }, []);

  return (
    <>
      <SectionTitle
        heading="Featured Jobs"
        subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid lg:grid-cols-2 gap-4 max-w-screen-2xl mx-auto">
        {featuredJobs.map((featuredJob) => (
          <FeaturedJobsCard key={featuredJob.id} featuredJob={featuredJob} />
        ))}
      </div>
    </>
  );
};

export default FeaturedJobs;
