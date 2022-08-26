import "../css/Header.css";
function Header() {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <p>Home</p>
        </div>
        <div className="header-end">
          <p>
            <button>
              <i className="fa-solid fa-fire-flame-curved fa-lg"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
