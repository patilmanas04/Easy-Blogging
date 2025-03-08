import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const Profile = ({ posts, setPosts }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock user posts (Replace with API call if needed)
    setPosts([
      { id: 1, title: "My First Post", body: "This is the body of my first post." },
      { id: 2, title: "Another Blog Post", body: "This is another article I wrote." },
    ]);
  });

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3 position-relative">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
                <div>
                  {/* Edit Button */}
                  <span
                    className="me-2 position-relative"
                    onMouseEnter={() => setHovered(`edit-${post.id}`)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/edit-post/${post.id}`)}
                  >
                    <FaEdit className="text-primary" />
                    {hovered === `edit-${post.id}` && (
                      <span className="position-absolute bg-dark text-white p-1 rounded" style={{ top: "-25px", right: "0", fontSize: "12px" }}>
                        Edit
                      </span>
                    )}
                  </span>

                  {/* Delete Button */}
                  <span
                    className="position-relative"
                    onMouseEnter={() => setHovered(`delete-${post.id}`)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(post.id)}
                  >
                    <FaTrash className="text-danger" />
                    {hovered === `delete-${post.id}` && (
                      <span className="position-absolute bg-dark text-white p-1 rounded" style={{ top: "-25px", right: "0", fontSize: "12px" }}>
                        Delete
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts yet. Start writing!</p>
      )}
    </div>
  );
};

export default Profile;
