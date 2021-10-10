
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Topbar/>
    <Switch>
      <Route exact path="/">
            <Home />
      </Route>
      <Route exact path="/register">
            <Register />
      </Route>
      <Route exact path="/login">
            <Login />
      </Route>
      <Route exact path="/write">
            <Write />
      </Route>
      <Route exact path="/settings">
            <Settings />
      </Route>
      <Route exact path="/post/:postId">
            <Single />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
