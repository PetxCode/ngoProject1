import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Build/HomeScree";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
