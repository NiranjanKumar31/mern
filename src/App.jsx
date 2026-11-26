import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from'../src/pages/login';
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Team from '../src/pages/team';
import Calendar from "./pages/calendar";
import Dashboard from "./pages/dashboard";
import Client from "./pages/client";
import Settings from "./pages/settings";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;