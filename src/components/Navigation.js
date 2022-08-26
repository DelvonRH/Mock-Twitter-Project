import "../css/Navigation.css";

function Navigation() {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button>
            <i className="fa-brands fa-twitter"></i>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-solid fa-house-chimney-window"></i>
            <span className="d-none d-md-inline nav-text">Home</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-solid fa-hashtag"></i>
            <span className="d-none d-md-inline nav-text">Explore</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-regular fa-bell"></i>
            <span className="d-none d-md-inline nav-text">Notifications</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-regular fa-envelope"></i>
            <span className="d-none d-md-inline nav-text">Messages</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-regular fa-bookmark"></i>
            <span className="d-none d-md-inline nav-text">Bookmarks</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-regular fa-file-lines"></i>
            <span className="d-none d-md-inline nav-text">Lists</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-regular fa-user"></i>
            <span className="d-none d-md-inline nav-text">Profile</span>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="fa-solid fa-ellipsis"></i>
            <span className="d-none d-md-inline nav-text">More</span>
          </button>
        </li>
        <li className="nav-item">
          <button className="tweet-button">
            <span className="">Tweet</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
