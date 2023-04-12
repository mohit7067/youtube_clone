import { useState, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedcategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedcategory={setSelectedcategory}
        />
        <Typography
          className="copyright"
          variant="body-2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Mohit Patil
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>

        <Videos
          videos={videos}
          width={{
            xs: "100%",
            sm: "100%",
            md: "85%",
            lg: "85%",
            xl: "90%",
          }}
          gridTemplateColumns={{
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(6,1fr)",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
