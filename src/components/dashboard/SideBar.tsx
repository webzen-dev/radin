import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GrGroup, GrProjects } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const SideBar = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [MobileSideBar, setMobileSideBar] = useState(false);
  return (
    <>
      <div
        className="sidebar-menu"
        onClick={() => setMobileSideBar(!MobileSideBar)}
      >
        {MobileSideBar ? (
          <MdClose className="close-side-bar" />
        ) : (
          <HiOutlineMenuAlt2 className="open-side-bar" />
        )}
      </div>
      <div
        className={`${MobileSideBar && " sidebar-mobile"} sidebar`}
        onClick={() => setMobileSideBar(false)}
      >
        <div className="profile">
          <FaUserCircle />
          <span className="user">username 1</span>
        </div>
        <ul className="list">
          <li className={currentPath === "/dashboard/profile" ? "active" : ""}>
            <Link href="/dashboard/profile">
              <FiUser />
              <span>Profile</span>
            </Link>
          </li>
          <li
            className={currentPath === "/dashboard/list-admin" ? "active" : ""}
          >
            <Link href="/dashboard/list-admin">
              <GrGroup />
              <span>List Admins</span>
            </Link>
          </li>
          <li
            className={currentPath === "/dashboard/add-admin" ? "active" : ""}
          >
            <Link href="/dashboard/add-admin">
              <AiOutlineUsergroupAdd />
              <span>Add Admin</span>
            </Link>
          </li>
          <li className={currentPath === "/dashboard/projects" ? "active" : ""}>
            <Link href="/dashboard/projects">
              <GrProjects />
              <span>Projects</span>
            </Link>
          </li>
          <li className={currentPath === "/dashboard/messages" ? "active" : ""}>
            <Link href="/dashboard/messages">
              <LuMessagesSquare />
              <span>Messages</span>
            </Link>
          </li>
        </ul>
        <div className="logout">
          <TbLogout2 />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
