import React from "react";

import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", sm: "100%", md: "88%", lg: "88%", xl: "90%" },
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(6,1fr)",
        },
        gap: "20px",
      }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
