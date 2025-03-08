import { Link } from "react-router-dom";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const [message, setMessage] = useState("");

  const handleShare = (articleId) => {
    const url = window.location.origin + "/article/" + articleId;
    navigator.clipboard.writeText(url);
    setMessage("Link copied!");
    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-4">Explore. Write. Inspire.</h1>
        <p className="lead">Join the world’s largest blogging community.</p>
      </header>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Featured Articles */}
          <div className="col-md-8">
            <h2>Featured Articles</h2>
            <div className="card mb-3">
              <div className="card-body">
                <Link to="/article/1" className="text-decoration-none text-dark">
                  <h5 className="card-title">The Future of AI in Blogging</h5>
                  <p className="card-text">Artificial intelligence is transforming the way we create and consume content...</p>
                </Link>
                <div className="d-flex gap-3 mt-2">
                  <span className="position-relative" onMouseEnter={() => setHovered("like-1")} onMouseLeave={() => setHovered(null)}>
                    <FaHeart className="text-danger" style={{ cursor: "pointer" }} />
                    {hovered === "like-1" && <span className="position-absolute bg-dark text-white p-1 rounded" style={{ top: "-25px", fontSize: "12px" }}>Like</span>}
                  </span>
                  <span className="position-relative" onMouseEnter={() => setHovered("comment-1")} onMouseLeave={() => setHovered(null)}>
                    <FaComment className="text-primary" style={{ cursor: "pointer" }} />
                    {hovered === "comment-1" && <span className="position-absolute bg-dark text-white p-1 rounded" style={{ top: "-25px", fontSize: "12px" }}>Comment</span>}
                  </span>
                  <span className="position-relative" onMouseEnter={() => setHovered("share-1")} onMouseLeave={() => setHovered(null)} onClick={() => handleShare(1)}>
                    <FaShare className="text-secondary" style={{ cursor: "pointer" }} />
                    {hovered === "share-1" && <span className="position-absolute bg-dark text-white p-1 rounded" style={{ top: "-25px", fontSize: "12px" }}>Share</span>}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Sidebar */}
          <div className="col-md-4">
            <h2>Trending Now</h2>
            <ul className="list-group">
              <li className="list-group-item"><Link to="/article/3">The Rise of No-Code Development</Link></li>
              <li className="list-group-item"><Link to="/article/4">How to Monetize Your Blog in 2024</Link></li>
              <li className="list-group-item"><Link to="/article/5">The Impact of Minimalism in UI/UX</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copy Link Message */}
      {message && <div className="alert alert-success text-center position-fixed bottom-0 start-50 translate-middle-x w-25">{message}</div>}
    </div>
  );
};

export default Home;
