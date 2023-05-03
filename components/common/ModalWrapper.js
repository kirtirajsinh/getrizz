import { Modal } from "@mui/material";
import React from "react";
// import { AiOutlineClose } from "react-icons/ai";

const ModalWrapper = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        closeAfterTransition={true}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white z-50  rounded-lg shadow-lg relative overflow-y-auto overflow-x-hidden max-w-md w-full">
            <div className="absolute top-0 right-0 p-2">
              {/* <AiOutlineClose
                className="text-gray-400 hover:text-gray-600 cursor-pointer text-2xl"
                onClick={() => setIsModalOpen(false)}
              /> */}
            </div>
            {children}
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </div>
      </Modal>
    </>
  );
};

export default ModalWrapper;
