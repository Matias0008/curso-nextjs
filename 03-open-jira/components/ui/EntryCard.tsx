import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
} from "@mui/material";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>Descripcion</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 2 }}
        >
          <Typography variant="body2">Mas de 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
