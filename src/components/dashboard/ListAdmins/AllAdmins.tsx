import { AiOutlineUser } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";

const AllAdmins = () => {
  const admins = [
    {
      id: 1,
      username: "sdcsadcdcdfverw234",
      email: "cssc23@sdcsaxc.com",
      password: "kisddddddr",
      role: "ADMIN",
    },
    {
      id: 2,
      username: "sdcssdadcdcdfverw234",
      email: "cssc23@sdcsaxsdc.com",
      password: "kisddddddr",
      role: "ADMIN",
    },
  ];
  return (
    <div className="all-admins">
      {admins.map((admin) => (
        <div className="admin">
          <div className="user">
            <AiOutlineUser />
            <div className="user-info">
              <span>{admin.username}</span>
              <span>{admin.email}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="admin">
        <div className="user">
          <AiOutlineUser />
          <div className="user-info">
            <span>username2</span>
            <span>username2@gmail.com</span>
          </div>
        </div>
        <div className="date">
          <span>cratedAt :</span>
          <span>2 Jun 2024</span>
        </div>
        <div className="delete">
          <FaRegTrashCan />
        </div>
      </div>
    </div>
  );
};

export default AllAdmins;
