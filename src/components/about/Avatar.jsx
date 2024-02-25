import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Adrian Tutuianu"
        src="./avatar-short.png"
        sx={{ width: 160, height: 160 }}
      />
    </Stack>
  );
}
