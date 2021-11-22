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
import Login from "./pages/login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Appoinment from "./pages/appoinment/Appoinment";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/appoinment">
            {" "}
            <Appoinment />{" "}
          </PrivateRoute>
          {/* <Route path="/services/:id" component={ServiceDetails} /> */}

          <PrivateRoute path="/services/:id">
            <ServiceDetails />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
