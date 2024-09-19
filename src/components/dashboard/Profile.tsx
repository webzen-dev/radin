
import { FaRegUserCircle } from "react-icons/fa";
import withAuth from "./withAuth";
import { useAuth } from '@/context/AuthContext'
const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading user information...</p>;
  }

  if (!user) {
    return <p>No user is logged in.</p>;
  }
  return (
    <div className="profile-page">
      <div className="profile-box">
        <div className="profile">
          <FaRegUserCircle />
        </div>
        <div className="profile-info">
          <div>
k          </div>
        </div>
      </div>
      <h2>Logged in as: {user.username}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default withAuth(Profile);
// /components/UserInfo.tsx
