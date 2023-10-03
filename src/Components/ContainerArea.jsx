import React from "react";

const ContainerArea = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-5 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerArea;
