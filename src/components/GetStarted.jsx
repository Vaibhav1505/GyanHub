import React, { useState, useEffect } from "react";
import axios from "axios";

// Set up the Gemini AI API configuration
const API_KEY = "AIzaSyDiUqIQGdO543Ol3u8EHerYrQjimwTBKpE";
const API_ENDPOINT = "https://api.gemini.com/v1/generate";

// Function to generate text using the Gemini AI API
async function generateText(prompt) {
  try {
    const response = await axios.post(
      API_ENDPOINT,
      {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
        top_p: 0.9,
        n: 1,
        stream: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}

function VideoSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [textResult, setTextResult] = useState("");

  const apiKey = "AIzaSyB5bjBLm8qTnJWZ-DM71o-8i-3-NJ45LBM";

  useEffect(() => {
    const fetchVideos = async () => {
      if (!searchTerm) return;

      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const params = {
        part: "snippet",
        q: searchTerm,
        maxResults: 10,
        key: apiKey,
      };

      try {
        const response = await axios.get(baseUrl, { params });
        const videos = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.default.url,
        }));
        setSearchResults(videos);

        // Generate text using the Gemini AI API
        const generatedText = await generateText(searchTerm);
        setTextResult(generatedText);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleThumbnailClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="bg-black h-full">
      <div className="flex items-center">
        <img
          className="h-8"
          src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
          alt=""
        />
        <input
          className="rounded-full px-32 py-2 m-3 bg-gray-900 text-white"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for Contnet..."
        />
      </div>
      <div className="overflow-scroll h-full">
        {/* Display text result */}
        <h2 className="text-white font-bold  mb-4">Text Result</h2>
        <p className="text-gray-400 mb-8">{textResult}</p>

        {/* Display video result */}
        <h2 className="text-white font-bold  mb-4">Video Result</h2>
        {searchResults.map((video) => (
          <div
            className="flex space-x-4 items-center py-2 px-2 border-1 rounded-lg my-3 border-slate-700 hover:bg-gray-800"
            key={video.id}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              onClick={() => handleThumbnailClick(video.id)}
              style={{ cursor: "pointer" }}
            />
            <div>
              <h3 className="font-bold  overflow-hidden text-white">
                {video.title}
              </h3>
              <p className="text-gray-400 overflow-hidden">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSearch;
