import React from "react";
import { StandardReactProps } from "../utils/interface";

interface CardProps extends StandardReactProps {
  id?: string;
  children: any;
}

export const Card = (props: CardProps) => {
  const { id, children } = props;
  return (
    <div
      id={id}
      className="container w-full max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700/50 transition-colors duration-200"
    >
      <div className="p-8 space-y-4 lg:space-y-10 lg:p-16">{children}</div>
    </div>
  );
};
