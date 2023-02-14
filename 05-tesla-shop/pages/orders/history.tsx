import NextLink from "next/link";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Grid, Typography, Chip, Link } from "@mui/material";

import { ShopLayout } from "@/components/layouts";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra informacion si esta pagada la orden o no",
    width: 150,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "Orden",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const orderID = params.row.id;
      return (
        <NextLink href={`/orders/${orderID}`} legacyBehavior passHref>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    paid: false,
    fullname: "Matias Delgado",
  },
  {
    id: 2,
    paid: true,
    fullname: "Matias Gordo",
  },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ height: "calc(100vh - 200px)", width: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
