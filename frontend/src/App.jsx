import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
