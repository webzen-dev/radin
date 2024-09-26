
const ProjectsHeader = ({ setShowSection }) => {
  return (
    <div className="project-header">
      <span className="item" onClick={() => setShowSection(false)}>
        Project List
      </span>
      <span className="item" onClick={() => setShowSection(true)}>
        Add Project
      </span>
    </div>
  );
};

export default ProjectsHeader;
