import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(4);

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
        {featuredJobs.slice(0, visibleJobs).map((featuredJob) => (
          <FeaturedJobsCard key={featuredJob.id} featuredJob={featuredJob} />
        ))}
      </div>
      <div className={visibleJobs === featuredJobs.length ? "hidden" : ""}>
        <div
          onClick={() => setVisibleJobs(featuredJobs.length)}
          className="flex  justify-center py-4"
        >
          <button className="btn bg-gradient-to-r from-[#7e98fe] to-[#9873ff] text-white">
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
