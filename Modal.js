import FontAwesome from "react-fontawesome";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="overlay">
      <div className="content">
        <FaWindowClose onClick={closeModal}></FaWindowClose>
        {children}
      </div>
    </div>
  );
};

export default Modal;