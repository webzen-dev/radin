import { MdOutlineSearch } from "react-icons/md";

const ProjectsSearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-input">
        <MdOutlineSearch />
        <input type="text" placeholder="Search brand , project , ..." />
      </div>
      <div className="box">
        <span>Brands : </span>
        <div className="brands">
          <span>brand 1</span>
          <span>brand 2</span>
          <span>brand 3</span>
          <span>brand 4</span>
          <span>brand 5</span>
          <span>brand 6</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSearchBox;
