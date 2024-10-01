import { FC } from "react";
import { IoIosWarning } from "react-icons/io";

interface ConfirmModalProps {
  username: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  username,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="confirm-modal">
      <div className="confirm-modal-box">
        <div className="title">Delete</div>
        <div className="caption">
          Are you sure you want to delete <span>{username}</span>?
        </div>
        <div className="warning">
          <div className="title">
            <IoIosWarning />
            <span>Warning</span>
          </div>
          <div className="caption">
            By deleting this account, you won't be able to access the system
            anymore.
          </div>
        </div>
        <div className="buttons">
          <button onClick={onCancel}>No, Cancel</button>
          <button onClick={onConfirm}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
