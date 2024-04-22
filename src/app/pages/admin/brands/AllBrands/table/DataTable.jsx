import React, { useMemo } from "react";
import { useTable } from "react-table";

const DataTable = ({ inputData, inputColumns }) => {
  const data = useMemo(() => inputData, []);
  const columns = useMemo(() => inputColumns, []);
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer table-data"
    >
      <thead>
        {headerGroups.map((hg) => (
          <tr {...hg.getHeaderGroupProps()}>
            {hg.headers.map((header) => (
              <th {...header.getHeaderProps()}>{header.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
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
