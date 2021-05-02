import React from "react";

import { Modal, ModalTransition } from "react-simple-hook-modal";

const ModalProps = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} transition={ModalTransition.BOTTOM_UP}>
      {props.children}
    </Modal>
  );
};
export default ModalProps;
