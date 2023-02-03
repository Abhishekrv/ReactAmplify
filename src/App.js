import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

function App() {
  return (
  <div>
    <Topbar/>
    <div className="container">
      <SideBar/>
      <div className="others">
      other pages
      </div>
      
    </div>
  </div>
  );
}

export default App;
