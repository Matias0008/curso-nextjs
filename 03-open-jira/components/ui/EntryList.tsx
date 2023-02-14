import { useContext, useMemo, DragEvent, SyntheticEvent } from "react";

import styles from "./EntryList.module.css";
import { Paper, List } from "@mui/material";

import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces";

import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id)!;
    // Cambiamos la status de la entry
    entry.status = status;
    updateEntry(entry, false);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "100vh",
          overflowY: "scroll",
          backgroundColor: "transparent",
          padding: 1,
          "&::-webkit-scrollbar ": {
            display: "none",
          },
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};
