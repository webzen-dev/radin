// pages/dashboard/[...slug].tsx
import { GetServerSideProps } from 'next';
import { verifyToken } from '../../utils/auth';
import { useRouter } from 'next/router';
import Profile from '../../components/dashboard/Profile';
import ListAdmins from '../../components/dashboard/ListAdmins';
import AddAdmin from '../../components/dashboard/AddAdmin';
import Projects from '../../components/dashboard/Projects';
import Messages from '../../components/dashboard/Messages';
import DashboardComponents from '../../components/dashboard/DashboardComponents';

const DashboardRouting = ({ user }) => {
  const router = useRouter();
  const { slug } = router.query;

  const renderRoute = () => {
    switch (slug?.[0]) {
      case 'profile':
        return <Profile />;
      case 'list-admin':
        return <ListAdmins />;
      case 'add-admin':
        return <AddAdmin />;
      case 'projects':
        return <Projects />;
      case 'messages':
        return <Messages />;
      default:
        return <h1>Welcome to Dashboard</h1>;
    }
  };

  return (
    <DashboardComponents>
      {renderRoute()}
    </DashboardComponents>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const decoded = verifyToken(context);

  if (!decoded) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { user: decoded },
  };
};

export default DashboardRouting;
