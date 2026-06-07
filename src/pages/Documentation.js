import React from "react";
import "./Documentation.css";

function Documentation() {
  return (
    <div className="documentation">

      <h1>📚 Blogger App Documentation</h1>

      <section>
        <h2>Project Overview</h2>
        <p>
          Blogger App is a responsive React application that displays blog
          posts fetched from a REST API. It demonstrates React fundamentals
          including Hooks, component-based architecture, API integration,
          state management, and responsive UI design.
        </p>
      </section>

      <section>
        <h2>Technologies Used</h2>

        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Fetch API</li>
          <li>React Hooks</li>
        </ul>
      </section>

      <section>
        <h2>Features</h2>

        <ul>
          <li>Responsive Navbar</li>
          <li>Search Blogs</li>
          <li>Blog Cards</li>
          <li>Read More / Read Less</li>
          <li>Like Button</li>
          <li>Category Badge</li>
          <li>Loading State</li>
          <li>Error Handling</li>
        </ul>
      </section>

     
    

      <section>
        <h2>React Concepts Used</h2>

        <ul>
          <li>Functional Components</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>Props</li>
          <li>Conditional Rendering</li>
          <li>Event Handling</li>
          <li>Component Reusability</li>
        </ul>

      </section>

<section>
  <h2>🚀 Future Enhancements</h2>

  <ul>
    <li>User Authentication</li>
    <li>Create New Blog</li>
    <li>Edit Existing Blog</li>
    <li>Delete Blog</li>
    <li>Comment System</li>
    <li>Bookmark Feature</li>
    <li>Dark Mode Support</li>
    <li>Backend Integration</li>
    <li>Pagination</li>
    <li>User Profiles</li>
  </ul>
</section>

<section>
  <h2>👨‍💻 Developed By</h2>

  <p>
    <strong>Lakshmi Prabha V</strong>
  </p>

  <p>
    This project was developed using <strong>React.js</strong> as a
    learning project to demonstrate component-based architecture,
    REST API integration, state management using React Hooks,
    responsive UI development, reusable components, and modern
    frontend development practices.
  </p>

  <p>
    The application showcases real-world React concepts including
    API fetching, search functionality, conditional rendering,
    event handling, responsive design, and interactive user
    experience through reusable components.
  </p>
</section>



    </div>
  );
}

export default Documentation;