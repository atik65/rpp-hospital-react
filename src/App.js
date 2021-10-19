import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
