import React, { useState } from "react";
import "./BlogCard.css";

const images = [
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
];

function BlogCard({ id, title, body, category }) {

  const [showFull, setShowFull] = useState(false);
  const [likes, setLikes] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  return (
    <div className="blog-card">

      <img
        src={images[id % images.length]}
        alt="Blog"
        className="blog-image"
      />

      <div className="blog-content">

        <span className="blog-category">
          {category}
        </span>

        <div className="blog-meta">
  <span>👤 Admin</span>
  <span>📅 June 2026</span>
</div>

        <h2>{title}</h2>

        <p>
          {showFull
            ? body
            : body.substring(0, 100) + "..."}
        </p>

        <div className="blog-actions">

          <button
            className="read-btn"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Read Less" : "Read More"}
          </button>

          <button
            className="like-btn"
            onClick={() => setLikes(likes + 1)}
          >
            ❤️ {likes}
          </button>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;