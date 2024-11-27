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
        <div className="card-body">
          <img src={logo} className="lg:w-24"></img>
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-2">
            <button className="btn btn-sm">{remote_or_onsite}</button>
            <button className="btn btn-sm">{job_type}</button>
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
              <button className="btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobsCard;
