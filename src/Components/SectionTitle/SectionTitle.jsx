const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="text-center lg:mt-[130px] md:mt-24 font-Manrope py-8 space-y-8">
        <h2 className="lg:text-5xl font-extrabold">{heading}</h2>
        <h5 className="lg:text-base font-medium lg:leading-relaxed">
          {subHeading}
        </h5>
      </div>
    </>
  );
};

export default SectionTitle;
