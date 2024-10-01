import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/profile"); // Your endpoint to get user info
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
        router.replace("/"); // Redirect to login if there's an error (e.g., unauthorized access)
      }
    };

    fetchUserData();
  }, [router]);

  return (
    <div className="profile-page">
      <div className="profile-box">
        <div className="profile">
          <FaRegUserCircle />
        </div>
        {user ? (
          <div className="profile-info">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Role: {user.role}</div>
          </div>
        ) : (
          <div>Loading...</div> // Display loading while fetching user data
        )}
      </div>
    </div>
  );
};

export default Profile;
