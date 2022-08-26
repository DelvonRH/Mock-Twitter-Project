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
          <div className="col-3 navigation">
            <Navigation />
          </div>
          <div className="col-6">
            <Header />
            <Tweets userName={userName}/>
          </div>
          <div className="col-3 search">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
