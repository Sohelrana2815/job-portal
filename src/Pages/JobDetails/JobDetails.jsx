import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import { BsCurrencyDollar } from "react-icons/bs";
const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  console.log(idInt, job);

  return (
    <>
      <div className=" md:h-[400px] relative">
        {/*background with low opacity */}
        <div className="absolute inset-0 bg-[#7e90fe] opacity-5"></div>

        {/* Centered Text */}

        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-3xl font-bold">
          Job Details: {idInt}
        </h1>
        <div className="absolute bottom-0">
          <img src={bg1} alt="" />
        </div>
        <div className="absolute right-0">
          <img src={bg2} alt="" />
        </div>
      </div>

      {/* show details */}
      <div className="grid md:grid-cols-5 gap-6 px-8 py-4 max-w-screen-2xl mx-auto lg:mt-32 ">
        <div className="md:col-span-3  border h-96 p-4 space-y-6">
          <h4 className="font-medium  text-gray-600">
            {" "}
            <span className="font-extrabold text-black">
              Job Description:
            </span>{" "}
            {job.job_description}
          </h4>
          <h4 className="font-medium text-gray-600">
            {" "}
            <span className="font-extrabold text-black">
              Job Responsibility:
            </span>{" "}
            {job.job_responsibility}
          </h4>
          <h4 className="font-medium text-gray-600">
            {" "}
            <span className="font-extrabold text-black">
              Educational Requirements:
            </span>{" "}
            {job.educational_requirements}
          </h4>
          <h4 className="font-medium text-gray-600">
            {" "}
            <span className="font-extrabold text-black">Experiences:</span>{" "}
            {job.experiences}
          </h4>
        </div>

        <div className="border h-96  py-4  relative col-span-2">
          <div className="absolute inset-0 bg-[#7e90fe] opacity-5"></div>
          <div className="px-4">
            <h2 className="font-extrabold text-lg ">Job Details</h2>
            <div className="divider"></div>

            <div>
              <p className="flex items-center gap-2">
                <BsCurrencyDollar /> Salary: {job.salary} (per Month)
              </p>
            </div>
          </div>
          <button className="btn absolute bottom-0 w-full">Apply now </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
