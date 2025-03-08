import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Created:", { title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            className="form-control"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your content here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="buttons btn btn-primary">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;
