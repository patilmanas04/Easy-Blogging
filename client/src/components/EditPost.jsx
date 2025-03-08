import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const existingPost = posts.find((p) => p.id === parseInt(id));
    if (existingPost) {
      setPost(existingPost);
    } else {
      navigate("/profile"); // Redirect if post is not found
    }
  }, [id, posts, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setPosts(posts.map((p) => (p.id === parseInt(id) ? post : p)));
    navigate("/profile");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            className="form-control"
            rows="5"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            required
          ></textarea>
        </div>
        <button type="submit" className="buttons btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
