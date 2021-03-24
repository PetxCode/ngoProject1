import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Build/HomeScree";
import { GlobalStyle } from "./GlobalStyle";
import HeaderView from "./HeaderView";
import CaseProps from "./Home/CaseProps";
import Registration from "./NewStudents/NewStudents";
import StudentReg from "./NewStudents/StudentReg";
import { ViewStudents } from "./NewStudents/ViewStudents";
import ComponentStudent from "./S/ComponentStudent";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        {" "}
        <HeaderView />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/view" component={ViewStudents} />
          <Route exact path="/studentReg" component={ComponentStudent} />

          <Route exact path="/reg" component={Registration} />
          <Route exact path="/case/:id" component={CaseProps} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
