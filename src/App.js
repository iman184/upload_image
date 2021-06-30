import { BrowserRouter as Router, Route } from "react-router-dom";
import Galerie from "./Galerie";
import Login from "./Login";
import SignUp from "./Signup.js";
import Home from './Home'
import Page from './Page'
import ForgotPassword from "./ForgotPassword"
import Contact from './Contact'
import { AuthProvider } from "./AuthContext"

import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>

        <div className="App">
          <PrivateRoute exact path="/" component={Galerie} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/page" component={Page} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/forgot-password" component={ForgotPassword} />

        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

