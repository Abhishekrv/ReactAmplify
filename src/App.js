import SideBar from "./components/sidebar/SideBar";
import React from "react";
import ReactDOM from "react-dom/client"
import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router ,createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom";
import CreateProject from "./components/Mainbar/Mainbar"
import "./app.css";
import { Project } from "./models";
import ProjectCreateForm from "./ui-components/ProjectCreateForm";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/createProject",
    element:<ProjectCreateForm/>,
  },
]);




function App() {
  return (
      <Router>
          <Topbar/>
          <div className="container">
          <SideBar/>
          <Home/>
        </div> 
      </Router>
  );
}

export default App;
