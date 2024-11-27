import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import CategoryCard from "./CategoryCard";

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
      <div className="grid lg:grid-cols-4 lg:max-w-screen-2xl mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}  />
        ))}
      </div>
    </>
  );
};

export default JobCategories;
