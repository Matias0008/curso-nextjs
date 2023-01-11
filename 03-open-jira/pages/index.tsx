import { Typography, Grid, Card, CardHeader } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntryCard, EntryList } from "../components/ui";

export default function Home() {
  return (
    <>
      <Layout title="Home - OpenJira">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 84px)" }}>
              <CardHeader title="Pendientes" />
              <EntryList status="pending" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 84px)" }}>
              <CardHeader title="En progreso" />
              <EntryList status="in-progress" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 84px)" }}>
              <CardHeader title="Completadas" />
              <EntryList status="finished" />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
