// /pages/dashboard.tsx
import { GetServerSideProps } from "next";
import { verifyToken } from "../utils/auth";
import DashboardComponents from "../components/dashboard/DashboardComponents";

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
    // Redirect to a route that shows the login modal
    return {
      redirect: {
        destination: "/", // or any route that includes the footer to show the modal
        permanent: false,
      },
    };
  }

  return {
    props: { user: decoded },
  };
};

export default Dashboard;
