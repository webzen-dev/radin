import { MdOutlineSearch } from "react-icons/md";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

const ProjectsSearchBox = () => {
  const { setSearchTerm, projects } = useContext(ProjectContext);

  const uniqueBrands = Array.from(new Set(projects.map((project) => project.brand)));

  return (
    <div className="search-box">
      <div className="search-input">
        <MdOutlineSearch />
        <input
          type="text"
          placeholder="Search brand, project, etc..."
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <div className="box">
        <span>Brands: </span>
        <div className="brands">
          <span onClick={()=>setSearchTerm("")}>All</span>
          {uniqueBrands.map((brand, index) => (
            <span key={index} onClick={() => setSearchTerm(brand)}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSearchBox;
