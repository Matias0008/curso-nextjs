import { useContext } from "react";
import { Paper, List } from "@mui/material";

import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = entries.filter((entry) => entry.status === status);

  return (
    <div>
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
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};
