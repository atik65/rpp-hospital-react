import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import Doctors from "./pages/doctors/Doctors";
import ServiceDetails from "./pages/serviceDetails/ServiceDetails";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/services/:id" component={ServiceDetails} />
      </Switch>
    </Router>
  );
}

export default App;
