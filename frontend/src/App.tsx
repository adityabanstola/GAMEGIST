import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login-system/Login";
import Register from "./login-system/Register";
import Navbar from "./navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Single from "./news-app/Single";
import Standing from "./news-app/Standing";
import Fantasy from "./fantasy/fantasy";
import News from "./news-app/News";
import Footer from "./footer/Footer";
import Home from "./Home/home";
import Filter from "./fantasy/filter";
import Group from "./fantasy/Group/Group";
import MyTeam from "./fantasy/myteam";
import Field from "./fantasy/Field";
import FantasyNews from "./fantasy/fantasy-news";
import { ToastContainer } from "react-toastify";
import CreateGroup from "./fantasy/Group/createGroup";
import JoinGroup from "./fantasy/Group/joinGroup";
import GroupList from "./fantasy/Group/groupList";
import Leagues from "./leagues/leagues";

function App() {
  return (
    <div style={{ backgroundColor: "222831" }} className="App">
      <ToastContainer />
      <div style={{ marginBottom: 80 }}>
        <Navbar />
      </div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/single" element={<Single />} />
        <Route path="/standing" element={<Standing />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/home" element={<Home />} />\
        <Route path="/filter" element={<Filter />} />
        <Route path="/myteam" element={<MyTeam />} />
        <Route path="/field" element={<Field />} />
        <Route path="/fantasynews" element={<FantasyNews />} />
        <Route path="*" element={<Navigate to="/field" />} />
        <Route path="/group" element={<Group />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/join-group" element={<JoinGroup />} />
        <Route path="/group-list" element={<GroupList />} />
        <Route path="leagues" element={<Leagues />} />
        {/* <Route path="/livescore" element={<LiveScoresCard />} /> */}
        {/* <Route path="/match" element={<ImportantMatches />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
