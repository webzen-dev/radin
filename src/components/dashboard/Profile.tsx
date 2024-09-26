
import { FaRegUserCircle } from "react-icons/fa";
const Profile = () => {
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
      {/* <h2>Logged in as: {user.username}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p> */}
    </div>
  );
};

export default Profile;
