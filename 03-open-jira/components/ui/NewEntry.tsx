import { useState, ChangeEvent, useContext } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import { Button, Box, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const { addNewEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
    addNewEntry(inputValue);
  };
  const mountedStyle = { animation: "inAnimation .5s ease-in-out" };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <Box sx={isAddingEntry && mountedStyle}>
            <TextField
              fullWidth
              placeholder="Nueva entrada"
              label="Nueva entrada"
              autoFocus
              multiline
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChange}
              onBlur={() => setTouched(true)}
              sx={{ marginBottom: 2 }}
            />
            <Box display={"flex"} justifyContent="space-between">
              <Button
                variant="text"
                onClick={() => {
                  setIsAddingEntry(false);
                  setTouched(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
