import { useState, ChangeEvent, useMemo, useContext } from "react";
import { GetServerSideProps } from "next";

import {
  capitalize,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";
import { Layout } from "../../components/layouts";
import { Entry, EntryStatus } from "../../interfaces";
import { dateFunctions } from "../../utils";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

const mapStatus = {
  pending: "Pendiente",
  "in-progress": "En-proceso",
  finished: "Completada",
};

const EntryPage: React.FC<Props> = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  const isNotValid = useMemo(
    () => inputValue.length === 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };

    updateEntry(updatedEntry, true);
  };

  return (
    <Layout title={`${inputValue.substring(0, 20)}...`}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                autoFocus
                fullWidth
                placeholder="Nueva entrada"
                label="Nueva entrada"
                multiline
                sx={{ marginBottom: 2 }}
                value={inputValue}
                onChange={onInputValueChange}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChange}
                  sx={{ marginBottom: 2 }}
                >
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(mapStatus[option])}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Button
                fullWidth
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={onSave}
                disabled={inputValue.length === 0}
              >
                Guardar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.dark",
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
