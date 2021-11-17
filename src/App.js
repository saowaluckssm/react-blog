import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./component/Create";
import BlogDetail from "./component/BlogDetail";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
