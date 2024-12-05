import { BsCurrencyDollar } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const AppliedJobsCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <>
      {/* Applied jobs card */}

      <div className="lg:w-[1320px] h-[300px] p-7 border flex items-center justify-between">
        {/* 1st: content */}
        <div className="flex  gap-6">
          {/* Company Logo box */}
          <div className="w-[240px] border h-[240px] bg-gray-100 rounded-lg flex flex-col items-center justify-center px-4">
            <img src={logo} className="" alt="" />
          </div>
          {/* Text/info */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">{job_title}</h2>
            <p>{company_name}</p>

            <div className="space-y-4 py-6">
              <div className="space-x-6 ">
                <span className="border font-semibold border-[#7e90fe] p-2 rounded-lg text-[#7e90fe]">
                  {remote_or_onsite}
                </span>
                <span className="border font-semibold border-[#7e90fe] p-2 rounded-lg text-[#7e90fe]">
                  {job_type}
                </span>
              </div>
              {/* Location and salary */}
              <div className="space-x-6 flex">
                <span className="flex items-center gap-2">
                  <TfiLocationPin className="text-xl" />
                  {location}
                </span>
                <span className="flex items-center gap-2">
                  <BsCurrencyDollar className="text-xl" />
                  {salary}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd: content */}
        <div>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </>
  );
};

export default AppliedJobsCard;
