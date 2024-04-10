import React from "react";
import { useTable } from "react-table";

const DataTable = () => {
  const data = useMemo(() => peopleData, []);
  const columns = useMemo(() => usersColumns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow,
    headerGroups,
  } = useTable({
    columns,
    data,
  });
  return (
    <table {...getTableProps()}>
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
