import axios from "axios";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
  image: string;
}

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const ProjectProvider: React.FC<Props> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        if (response.status !== 200) {
          throw new Error("Failed to fetch projects");
        }
        setProjects(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
