import user_img from "../../../assets/images/user.png";
const Banner = () => {
  return (
    <>
      <div className="flex items-center bg-gradient-to-r from-[#fdfdff] to-[#eee6ff]  font-Manrope">
        <div className="lg:w-[600px] mx-auto">
          <h1 className="lg:text-[80px] font-extrabold text-gray-900">
            One Step Closer To Your{" "}
            <span className="text-[#7e90fe]">Dream Job</span>
          </h1>
          <h3 className="lg:text-lg font-medium text-gray-700">
            Explore thousands of job opportunities with all the information you
            need. It is your future. Come find it. Manage all your job
            applications from start to finish.
          </h3>
          <button className="bg-gradient-to-r btn from-[#7e90fe] to-[#9873ff] text-white lg:mt-8 ">
            Get Started
          </button>
        </div>

        {/* img div */}
        <div>
          <img src={user_img} alt="User Image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
