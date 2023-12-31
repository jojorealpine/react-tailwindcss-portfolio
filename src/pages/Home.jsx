import { Link } from "react-router-dom";
import ProjectsGrid from "../components/products/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";
import { ProductFilterContext } from "../context/filterContext";
import { useContext } from "react";

const Home = () => {
  const { filter } = useContext(ProductFilterContext);

  return (
    <div className="container mx-auto">
      <div>키워드는{filter.searchKeyword}입니다</div>
      {/* <FilterBar/> */}
      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
