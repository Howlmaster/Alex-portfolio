import React from "react";
import { StandardReactProps } from "../../../utils/interface";

export const TeamsIcon = (props: StandardReactProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${props.className} fill-current text-gray-600 dark:text-gray-300`}
    >
      <path d="M20.5 14.26a1 1 0 0 0-1 1v4.35h-3v-3.88a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3.88h-3v-4.35a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.35H5.5v-4.35a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.35H0v-5.35a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.35a2.46 2.46 0 0 1 2.5-2.35 2.5 2.5 0 0 1 2.5 2.35v-.35a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.35a2.46 2.46 0 0 1 2.5-2.35 2.5 2.5 0 0 1 2.5 2.35v-.35a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.35a2.46 2.46 0 0 1 2.5-2.35 2.5 2.5 0 0 1 2.5 2.35v-.35a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5.35h-1.5v-4.35a1 1 0 0 0-1-1h-1zM6 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
    </svg>
  );
}; 