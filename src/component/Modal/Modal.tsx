import React, { ReactNode, useCallback, useState } from "react";

interface ModalI {
  children: (handleClose: any) => ReactNode;
  modalName: string;
}

const Modal: React.FC<ModalI> = ({ modalName, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div>
      {!isOpen && <button onClick={handleOpen}>{modalName}</button>}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "1em 2em",
              borderRadius: "1em",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <button onClick={handleClose}>X</button>
            {children(handleClose)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
