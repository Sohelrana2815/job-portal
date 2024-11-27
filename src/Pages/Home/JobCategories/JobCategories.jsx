import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error while data loading", error));
  }, []);

  return (
    <>
      <SectionTitle
        heading="Job Category List"
        subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div>{categories.length}</div>
    </>
  );
};

export default JobCategories;
