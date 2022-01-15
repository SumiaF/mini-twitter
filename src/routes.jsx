import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import MainFeed from "./components/MainFeed";
import UserFeed from "./components/UserFeed";
import MessageView from "./components/MessageView";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={MainFeed}/>
                <Route path="/user" component={UserFeed}/>
                <Route path="/message" component={MessageView}/>
                <Route component={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

// TODO: Ask Chris about using routes.jsx and Layout.js instead of importing Sidebar and NewsSidebar everywhere