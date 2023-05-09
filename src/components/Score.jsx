import React from "react";

const Score = ({}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed flex justify-center inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div
            className="align-bottom absolute bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-96 "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Education List
                </h3>
                <p>ars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
