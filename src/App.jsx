
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Team from "./pages/team";
import Calendar from "./pages/calendar";
import Dashboard from "./pages/dashboard";
import Client from "./pages/client";
import Settings from "./pages/settings";
import Register from "./pages/register";

import Adminlayout from "./pages/Admin/adminlayout";
import Admindashboard from "./pages/Admin/dashboard";
import Adminsettings from "./pages/Admin/settings";
import Userdetails from "./pages/Admin/userdetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Normal User Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/settings" element={<Settings />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Adminlayout />}>
          <Route path="admindashboard" element={<Admindashboard />} />
          <Route path="settings" element={<Adminsettings />} />
          <Route path="userdetails" element={<Userdetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
