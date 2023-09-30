
import { Link } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

type PropsDataTable = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export const DataTable = (props: PropsDataTable) => {

  const handleDelete = (id: number) => {
    console.log('🚀 ~ id:', id)
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid bg-white p-[20px]"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

type PropsAdd = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export const Add = (props: PropsAdd) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //add new item
    // mutation.mutate();
    props.setOpen(false)
  };
  return <div className="add">
    <div className="modal">
      <span className="close" onClick={() => props.setOpen(false)}>
        X
      </span>
      <h1>Add new {props.slug}</h1>
      <form onSubmit={handleSubmit}>
        {props.columns
          .filter((item) => item.field !== "id" && item.field !== "img")
          .map((column) => (
            <div className="item">
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}
        <button className="btn">Send</button>
      </form>
    </div>
  </div>
}





