import React from "react";
import { MdClose } from "react-icons/md";

const ForgotPasswordModal = ({ show, handleClose }) => {
  return (
    <div
      id="crypto-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={
        show
          ? "fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          : "hidden"
      }
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="crypto-modal"
            onClick={(e) => {
              if (typeof handleClose === "function") {
                handleClose(e);
              }
            }}
          >
            <MdClose size={30} color="#000" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              Reset Password
            </h3>
          </div>
          <div className="p-6">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Please generate a password link by entering your email.
            </p>
            <ul className="my-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <MdClose size={30} color="#000" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    MetaMask
                  </span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <MdClose size={30} color="#000" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Coinbase Wallet
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <MdClose size={30} color="#000" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Opera Wallet
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <MdClose size={30} color="#000" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    WalletConnect
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <MdClose size={30} color="#000    " />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Fortmatic
                  </span>
                </a>
              </li>
            </ul>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
              >
                <MdClose size={30} color="#000" />
                Why do I need to connect with my wallet?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
