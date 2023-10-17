import { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const Modal = ({ title, width, height, children, footer }) => (
    <div style={{ zIndex: "200000"}}>
      <Dialog draggable={false} visible={visible} onHide={hideModal} header={title} style={{ width, height, marginTop: "3rem" }} footer={footer}>
        {/* <hr /> */}
        {children}
      </Dialog>
    </div>
  );

  return { showModal, hideModal, Modal };
};

export default useModal;
