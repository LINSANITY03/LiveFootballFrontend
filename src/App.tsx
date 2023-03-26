import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "@/pages/admin/login/Admin_Login";
import UserLogin from "@/pages/client/register/Login";
import SignUp from "@/pages/client/register/SignUp";
import Undirected from "@/pages/Undirected/Undirected";
import Dashboard from "@/pages/client/Dashboard/Index";
import Tournament from "@/pages/client/Tournament/Index"

import { store } from "@/hooks/Store";

function App() {

  return (
    <div className="app bg-blue-20 "><Provider store={store}>
      <Router>
        <Routes>

          <Route
            path="/*"
            element={<Undirected />} />

          <Route index
            path="/"
            element={<UserLogin />} />

          <Route
            path="/signup"
            element={<SignUp />} />

          <Route
            path="/admin"
            element={<Login />} />

          <Route
            path="/dashboard"
            element={<Dashboard />} />

          <Route
            path="/tournament"
            element={<Tournament />} />


        </Routes>
      </Router>
    </Provider>
      <ToastContainer /></div>
  )
}

export default App
