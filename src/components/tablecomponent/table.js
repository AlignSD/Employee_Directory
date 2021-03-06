import React from "react";
import { useTable, useFilters, useState, useSortBy } from "react-table";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function Table({ columns, data }) {
  // const [filterInput, setFilterInput] = useState("");
  // console.log(filterInput);

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    // setFilter // The useFilter Hook provides a way to set the filter
  } = useTable(
    {
    columns,
    data
  },
  // useFilters,
  useSortBy // Adding the useFilters Hook to the table
  // You can add as many Hooks as you want. Check the documentation for details. You can even add custom Hooks for react-table here
  );

  

  // Update the state when input changes
  // const handleFilterChange = e => {
  //   const value = e.target.value || undefined;
  //   console.log(value)
  //   setFilter("name.first", value);
  //   setFilterInput(value);
  // };

  // // Input element
  // <input
  //   value={filterInput}
  //   onChange={handleFilterChange}
  //   placeholder={"Search name"}
  // />
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}
              className={
                column.isSorted
                  ? column.isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : ""
              }>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};
// {...column.getHeaderProps(column.getSortByToggleProps())}
// className={
//   column.isSorted
//     ? column.isSortedDesc
//       ? "sort-desc"
//       : "sort-asc"
//     : ""
// }