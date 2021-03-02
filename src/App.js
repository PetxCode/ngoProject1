import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Build/HomeScree";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
