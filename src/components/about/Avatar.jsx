import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Adrian Tutuianu"
        src="./logo.jpg"
        sx={{ width: 130, height: 130 }}
      />
    </Stack>
  );
}
