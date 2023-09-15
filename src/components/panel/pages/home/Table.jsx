import React from "react";

function Table({ data }) {
  // Get the column names from the first object in the data array
  const columns = Object.keys(data[0]); // Assuming all objects in data have the same keys

  return (
    <div className="table-container">
      {/* Create a table */}
      <table>
        <thead>
          <tr>
            {/* Create table header cells */}
            {columns.map((column) => (
              <th key={column}>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Create table rows */}
          {data.map((item, index) => (
            <tr key={index}>
              {/* Create table cells */}
              {columns.map((column) => (
                <td key={column}>
                  {/* Display owner's name if the column is "owner" */}
                  {column === "owner"
                    ? item[column].name
                    : column === "image"
                    ? <img src={item[column]} alt="Pet" style={{ width: "50px", height: "50px", borderRadius: "12px" }} /> // Display image
                    : item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
