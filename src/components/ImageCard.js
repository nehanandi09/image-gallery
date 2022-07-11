import React from "react";
import { nanoid } from "nanoid";

function ImageCard({ image }) {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img src={image.webformatURL} alt="iamge" className="w-full" />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 text-rose-600">
          Photo by {image.user}
        </h1>
        <ul>
          <li>
            <strong className="text-teal-800">Views: </strong>
            {image.views}
          </li>
          <li>
            <strong className="text-teal-800">Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong className="text-teal-800">Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={nanoid()}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
