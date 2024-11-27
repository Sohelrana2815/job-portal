const CategoryCard = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <>
      <div className="relative w-[311px] h-[243px] rounded-lg overflow-hidden mx-auto font-Manrope">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] opacity-50"></div>

        {/* Content */}
        <div className="relative z-10  flex justify-center flex-col items-center h-full">
          <img src={logo} alt="" />
          <h2 className="text-lg font-bold">{category_name}</h2>
          <h2>{availability}</h2>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
