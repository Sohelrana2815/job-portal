import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import { BsCurrencyDollar } from "react-icons/bs";
import { saveJobApplication } from "../../Utility/SavedAppliedJobs/SavedAppliedJobs";
import toast, { Toaster } from "react-hot-toast";
const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleJobApplicationToast = (idInt) => {
    const isSaved = saveJobApplication(idInt);
    if (isSaved) {
      toast.success("Job Applied Successfully");
    } else {
      toast.error("You have already applied for this job");
    }
  };

  return (
    <>
      <div className=" md:h-[400px] relative md:mt-0 mt-32 font-Manrope">
        {/*background with low opacity */}
        <div className="absolute inset-0 bg-[#7e90fe] opacity-5"></div>

        {/* Centered Text */}

        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  md:text-3xl font-bold">
          Job Details: {idInt}
        </h1>
        <div className="absolute bottom-0">
          <img src={bg1} alt="" className="w-40 md:w-full" />
        </div>
        <div className="absolute right-0">
          <img src={bg2} alt="" className="w-40 md:w-full" />
        </div>
      </div>

      {/* show details */}
      <div className="grid md:grid-cols-5 gap-6 px-8  max-w-screen-2xl mx-auto md:mt-32 mt-44 font-Manrope ">
        <div className="md:col-span-3 h-96 p-4 space-y-6">
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

        <div className=" h-96  py-4 mt-80 md:mt-0  relative col-span-2 ">
          <div className="absolute inset-0 bg-[#7e90fe] opacity-5"></div>
          <div className="px-4">
            <h2 className="font-extrabold text-lg f">Job Details</h2>
            <div className="divider"></div>

            <div>
              <p className="flex items-center gap-2">
                <BsCurrencyDollar /> Salary: {job.salary} (per Month)
              </p>
            </div>
          </div>
          <button
            onClick={() => handleJobApplicationToast(idInt)}
            className="btn absolute bottom-0 w-full bg-gradient-to-r from-[#7e98fe] to-[#9873ff] text-white"
          >
            Apply now{" "}
          </button>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default JobDetails;
