import { useState } from "react";
import { MainWrapper } from "../../components/mainWrapper.index";
import Modal from "../../components/modal";
import { ModalContent } from "../../components/modalCotent";

const ModalSection = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainWrapper>
      <button
        className="custom-increment-btn"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </button>
      <Modal show={showModal} close={() => closeModal()}>
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal>
    </MainWrapper>
  );
};

export default ModalSection;
