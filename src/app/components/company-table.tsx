import React from 'react';
interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = ['Company', 'Status', 'Promotion', 'Country', 'Joined date'];

const headerEl = headers.map((header, i) => (
  <th key={i} className="pb-5 text-sm font-light text-gray-900">
    {header}
  </th>
));

const CompanyTable = ({ children }: CompanyTableProps) => {
  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>{headerEl}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
