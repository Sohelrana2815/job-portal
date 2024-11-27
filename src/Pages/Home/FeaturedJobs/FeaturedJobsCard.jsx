import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedJobsCard = ({ featuredJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
  } = featuredJob;
  return (
    <>
      <div className="card bg-base-100  shadow-xl py-4 font-Manrope">
        <div className="card-body space-y-1">
          <img src={logo} className="w-24"></img>
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-2">
            <span className="border p-1 rounded-lg border-purple-400">
              {remote_or_onsite}
            </span>
            <span className="border p-1 rounded-lg border-purple-400">
              {job_type}
            </span>
          </div>
          <div className="flex justify-start">
            <p className="flex items-center">
              <CiLocationOn /> {location}
            </p>
            <p className="flex items-center">
              <BsCurrencyDollar /> Salary: {salary}
            </p>
          </div>
          <div>
            <Link to={`/jobDetails/${id}`}>
              <button className="btn btn-sm md:btn-md bg-gradient-to-r from-[#7e98fe] to-[#9873ff] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobsCard;
