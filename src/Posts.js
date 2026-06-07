
import React, { useState, useEffect } from "react";
import Post from "./Post";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";

const categories = [
  "Technology",
  "Education",
  "Travel",
  "Business",
  "Sports"
];

function Posts() {

  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState("");

  const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const postList = data.slice(0, 5).map(
          p => new Post(p.userId, p.id, p.title, p.body)
        );

        setPosts(postList);
      })
      .catch(error => {
        console.error(error);
        setHasError(true);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (hasError) {
    return <h2>Something went wrong while loading posts.</h2>;
  }

  if (posts.length === 0) {
    return <h2 className="posts-title">Loading Blogs...</h2>;
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2 className="posts-title">
        Recent Blog Posts
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="posts-container">

        {filteredPosts.length === 0 ? (

          <h3 style={{ textAlign: "center", width: "100%" }}>
            No blogs found.
          </h3>

        ) : (

          filteredPosts.map(post => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              category={categories[post.id % categories.length]}
            />
          ))

        )}

      </div>

    </div>
  );
}

export default Posts;
