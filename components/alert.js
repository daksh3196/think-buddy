import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="alert m-auto bg-gray rounded border-0 border-black text-white">
      {message}
      <style jsx>{`
        .alert {
          padding: 1rem;
          margin-bottom: 1rem;
          width: 15%;
        }
      `}</style>
    </div>
  );
};

export default Alert;
