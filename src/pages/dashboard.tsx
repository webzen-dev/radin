// /pages/dashboard.tsx
import { GetServerSideProps } from "next";
import { verifyToken } from "../utils/auth";
import DashboardComponents from "@/components/dashboard/DashboardComponents";
import SideBar from "@/components/dashboard/SideBar";

const Dashboard = () => {
  return (
    <div>
      <DashboardComponents />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const decoded = verifyToken(context);

  if (!decoded) {
    return {
      redirect: {
        destination: "/login", // Redirect to login page
        permanent: false,
      },
    };
  }

  return {
    props: { user: decoded }, // Pass decoded user data to the page
  };
};

export default Dashboard;
