import { GetServerSideProps } from "next";
import { verifyToken } from "../utils/auth";
import DashboardComponents from "@/components/dashboard/DashboardComponents";
import SideBar from "@/components/dashboard/SideBar";

const Dashboard = () => {
  return (
    <div>
        <SideBar/>
      <DashboardComponents />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthenticated = verifyToken(context);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
