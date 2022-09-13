import Navigation from "./Navigation";
import Tweets from "./Tweets";
import Search from "./Search";
import Header from "./Header";
import "../css/Home.css";
function Home({userName}) {
  return (
    <div className="Home">
      <div className="container">
        <div className="row home align-items-start">
          <div className="col-lg-3 col-md-4 col-sm-1 navigation">
            <Navigation />
          </div>
          <div className="posts col-lg-6 col-md-8 col-sm-11">
            <Header />
            <Tweets userName={userName}/>
          </div>
          <div className="col-lg-3 search">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
