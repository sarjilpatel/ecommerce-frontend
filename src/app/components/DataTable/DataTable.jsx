import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

const DataTable = ({ inputData, inputColumns }) => {
  const data = useMemo(() => inputData, [inputData]);
  const columns = useMemo(() => inputColumns, [inputColumns]);
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table
      {...getTableProps()}
      className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer table-data"
    >
      <thead>
        {headerGroups.map((hg) => (
          <tr
            {...hg.getHeaderGroupProps()}
            className="text-start text-table-color fw-bolder fs-7 text-uppercase gs-0 leave-responsive"
          >
            {hg.headers.map((header) => (
              <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                {header.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className=" className='text-gray-600 fw-bold' "
      >
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
