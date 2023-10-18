import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-2 py-3">
            <div className="close-icon text-right m-2">
              <div className="flex justify-between align-center">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900 text-start"
                  id="modal-title"
                >
                 Title
                </h3>
                <i className="ri-close-line text-lg cursor-pointer" onClick={closeModal}></i>
              </div>
                <div className="mt-3  sm:text-left">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
