import TopBar from "./components/topbar/TopBar";
import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { Routes, Route } from "react-router-dom";

function App() {
    const user = true;
    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route
                    path="/register"
                    element={user ? <Home /> : <Register />}
                />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route
                    path="/write"
                    element={user ? <Write /> : <Register />}
                />
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <Register />}
                />
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </>
    );
}

export default App;
