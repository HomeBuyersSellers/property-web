import React from "react";

export const Table = ({ children, variant }) => {
  return (
    <table className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${variant}`}>
      {children}
    </table>
  );
};

export const TableHead = ({ children, variant }) => {
  return (
    <thead className={`${variant ? variant :""}`}>
      {children}
    </thead>
  );
};

export const TableRow = ({ children, variant }) => {
  return (
    <tr className={`px-6 py-3 ${variant ? variant :"" }`}>
      {children}
    </tr>
  );
};

export const TableHeaderCell = ({ children, variant }) => {
  return (
    <th scope="col" className={`px-6 py-3 ${variant ? variant :""}`}>
      {children}
    </th>
  );
};

export const TableBody = ({ children, variant }) => {
  return <tbody className={variant ? variant :""}>{children}</tbody>;
};

export const TableCell = ({ children, variant }) => {
  return <td className={`border px-6 py-3 text-gray-700 font-medium ${variant ? variant :""}`}>{children}</td>;
};
