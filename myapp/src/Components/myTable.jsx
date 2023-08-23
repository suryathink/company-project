import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { data } from "./makeData.ts";

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "taskName",
        header: "Task Name", //uses the default width from defaultColumn prop
      },
      {
        accessorKey: "status",
        header: "Status",
        enableResizing: true, //enable resizing for this column
      },
      {
        accessorKey: "assignee",
        header: "Assignee",
        size: 200, //increase the width of this column
      },
      {
        accessorKey: "priority",
        header: "Priority",
        size: 120, //decrease the width of this column
      },
      {
        accessorKey: "due",
        header: "Due",
        size: 100, //decrease the width of this column
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      //optionally override the default column widths
      defaultColumn={{
        maxSize: 400,
        minSize: 80,
        size: 150, //default size is usually 180
      }}
      enableColumnResizing
      columnResizeMode="onChange" //default
    />
  );
};

export default Example;
