const AppliedJobsCard = () => {
  return (
    <>
      <div className="lg:w-[1320px] h-[300px] p-7 border flex items-center justify-between">
        {/* 1st: content */}
        <div className="flex items-center gap-6">
          <div className="w-[240px] border h-[240px]">
            <p>logo</p>
          </div>
          <div>
            <p>Text/content</p>
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
