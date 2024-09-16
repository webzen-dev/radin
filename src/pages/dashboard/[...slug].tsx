// pages/dashboard/[...slug].tsx
import { useRouter } from 'next/router';
import Profile from '../../components/dashboard/Profile';
import ListAdmins from '../../components/dashboard/ListAdmins';
import AddAdmin from '../../components/dashboard/AddAdmin';
import Projects from '../../components/dashboard/Projects';
import Messages from '../../components/dashboard/Messages';
import withAuth from '@/components/dashboard/withAuth';
import DashboardComponents from '@/components/dashboard/DashboardComponents';

const DashboardRouting = () => {
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

export default withAuth(DashboardRouting);
