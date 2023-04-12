import React from "react";

import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, margin, width, gridTemplateColumns }) => {
  return (
    <Stack
      sx={{
        width,
        display: "grid",
        gridTemplateColumns,
        gap: "20px",
        margin,
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
