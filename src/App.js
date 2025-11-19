import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Register/Register";
import SideMenu from "./SideMenu/SideMenu";
import NextPage from "./Register/NextPage";
import NextThree from "./Register/NextThree";
import NextFour from "./Register/NextFour";
import Total from "./Register/Total";
import UserPennding from "./Register/UserPennding";
import Delete from "./Delete/Delete";
import Contact from "./Contact/Contact";
import Notifications from "./Notifications/Notifications";
import Help from "./Help/Help";
import Accounts from "./Accounts/Accounts";





import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">

        {/* Left SideMenu Always Visible */}
        <SideMenu />

        {/* Right Content Section */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/next" element={<NextPage />} />
            <Route path="/nextthree" element={<NextThree />} />
            <Route path="/nextfour" element={<NextFour />} />
            <Route path="/total" element={<Total />} />
            <Route path="/user" element={<UserPennding />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help" element={<Help />} />
            <Route path="/accounts" element={<Accounts />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
