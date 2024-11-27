import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="text-center lg:mt-[130px] md:mt-24 font-Manrope py-8 space-y-8">
        <h2 className="lg:text-5xl md:text-3xl text-xl font-extrabold">
          {heading}
        </h2>
        <h5 className="md:text-base text-sm font-medium lg:leading-relaxed">
          {subHeading}
        </h5>
      </div>
    </>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
