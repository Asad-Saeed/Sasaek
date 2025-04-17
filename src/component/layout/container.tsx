import React from "react";

const Container = ({
  children,
  className = "",
  innerClassName = "",
  style,
}: {
  children: any;
  className?: string;
  style?: any;
  innerClassName?: string;
}) => {
  return (
    <div
      style={style}
      className={`flex w-[100%] items-center justify-center ${className}`}
    >
      <div className={`h-[100%] w-[100%] max-w-[1440px] ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
