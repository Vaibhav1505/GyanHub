import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls

function VideoSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "AIzaSyClSkQYs5MyU3H2M6AR6wgmL7lEBfG0k7k"; // Replace with your actual Youtube Data API key

  useEffect(() => {
    const fetchVideos = async () => {
      if (!searchTerm) return; // Avoid empty search calls

      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const params = {
        part: "snippet",
        q: searchTerm,
        maxResults: 10, // Limit results
        key: apiKey,
      };

      try {
        const response = await axios.get(baseUrl, { params });
        const videos = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          // Add thumbnail information if needed
        }));
        setSearchResults(videos);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately (e.g., display an error message)
      }
    };

    fetchVideos();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Video Search</h1>
      <input
        type="text"
        placeholder="Search videos"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="results">
        {searchResults.length > 0 ? (
          searchResults.map((video) => (
            <div key={video.id} className="video-item">
              <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                <h2>{video.title}</h2>
              </a>
              <p>{video.description}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default VideoSearch;
