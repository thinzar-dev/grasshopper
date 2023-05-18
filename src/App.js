import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Trello_101 from "./components/Trello_101";
import Trello_action from "./components/Trello_action";
import Trello_comments from "./components/Trello_comments";
import Trello_features from "./components/Trello_features";
import Trello_plans from "./components/Trello_plans";
import Trello_plan_price from "./components/Trello_plan_price";
import Trello_started from "./components/Trello_started";
import Trello_teams from "./components/Trello_teams";
import Trello_views from "./components/Trello_views";

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Trello_101></Trello_101>
      <Trello_action></Trello_action>
      <Trello_views></Trello_views>
      <Trello_features></Trello_features>
      <Trello_comments></Trello_comments>
      <Trello_plans></Trello_plans>
      <Trello_teams></Trello_teams>
      <Trello_started></Trello_started>
      <Footer></Footer>
    </div>
  );
}

export default App;
