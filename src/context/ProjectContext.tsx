import React, { createContext, useState, ReactNode } from "react";

// تعریف نوع پروژه
interface Project {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
  image: string;
}

// تعریف نوع Context
interface ProjectContextType {
  projects: Project[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// ایجاد Context
export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);

// تعریف Props
interface Props {
  children: ReactNode;
}

// ایجاد Provider
export const ProjectProvider: React.FC<Props> = ({ children }) => {
  // تعریف آرایه ثابت پروژه‌ها
  const initialProjects: Project[] = [
    {
      id: 1,
      name: "Swan Analytical Instrument",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      brand: "brand A",
      image: "https://ret-co.ae/uploads/products/product-45-1-thumb2.jpg",
      category: "Category 1",
    },
    {
      id: 2,
      name: "Parts for Flender Gearbox",
      description: "test",
      brand: "brand 2",
      image: "https://ret-co.ae/uploads/products/product-43-1-thumb2.jpg",
      category: "Category 12",
    },
    {
      id: 3,
      name: "Parts for Mapro Oil Mist Blower",
      description: "This is a new project",
      brand: "Brand 1",
      image: "https://ret-co.ae/uploads/products/product-41-1-thumb2.jpg",
      category: "Category 32",
    },
  ];

  const [projects] = useState<Project[]>(initialProjects); // استفاده از آرایه ثابت
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <ProjectContext.Provider
      value={{
        projects,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
