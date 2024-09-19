// components/LogoutButton.tsx
import { useRouter } from "next/router";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/user/logout", {
        method: "POST",
      });
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogout} disabled={loading} className="logout">
      <TbLogout2 />
      <span>{loading ? "Logging out..." : "Logout"}</span>
    </button>
  );
};

export default LogoutButton;
