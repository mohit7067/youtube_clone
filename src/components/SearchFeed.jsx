import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos
        videos={videos}
        width={{
          xs: "100%",
          sm: "96%",
          md: "98%",
          lg: "98%",
          xl: "98%",
        }}
        gridTemplateColumns={{
          xs: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(7,1fr)",
        }}
      />
    </Box>
  );
};

export default SearchFeed;
