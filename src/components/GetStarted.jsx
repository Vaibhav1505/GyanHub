import React, { useState, useEffect } from "react";
import axios from "axios";

function VideoSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "AIzaSyAy3mRfi0gKdcGsaRFD776J-pj9EQqTjUc";

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
    <div className="bg-black h-full w-full  ">
      <div className="flex items-center"> 
        <input
          className="rounded-full px-32 py-2 m-6 bg-gray-900 text-white  "
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for videos..."
        />
        <img
          className="h-8"
          src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
          alt=""
        />
      </div>
      <div>
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
            <h3 className="font-bold tex-4xl overflow-hidden text-white">
              {video.title}
            </h3>
            <p className="text-gray-400 overflow-hidden">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSearch;
