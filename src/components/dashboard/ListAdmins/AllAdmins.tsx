import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
import ConfirmModal from "./ConfirmModal";

const AllAdmins = () => {
  const [adminData, setAdminData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [adminToDelete, setAdminToDelete] = useState<{
    id: number;
    username: string;
  } | null>(null);
  const getAdminsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/user");
      setAdminData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (admin: { id: number; username: string }) => {
    setAdminToDelete(admin);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (adminToDelete !== null) {
      try {
        await axios.delete(
          `http://localhost:3000/api/user?id=${adminToDelete.id}`
        );
        setAdminData((prevData) =>
          prevData.filter((admin) => admin.id !== adminToDelete.id)
        );
        setShowModal(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setAdminToDelete(null);
  };

  useEffect(() => {
    getAdminsData();
  }, []);

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div className="all-admins">
      {adminData.map((admin: any) => (
        <div className="admin" key={admin.id}>
          <div className="user">
            <AiOutlineUser />
            <div className="user-info">
              <span>{admin.username}</span>
              <span>{admin.email}</span>
            </div>
          </div>

          <div
            className="delete"
            onClick={() =>
              handleDeleteClick({ id: admin.id, username: admin.username })
            }
          >
            <FaRegTrashCan />
          </div>
        </div>
      ))}

      {showModal && adminToDelete && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          username={adminToDelete.username}
        />
      )}
    </div>
  );
};

export default AllAdmins;
