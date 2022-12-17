import { Outlet } from "react-router-dom";
import React from "react"
import Card from "../sidebar/card";
const Main = () => {
    return (<div style={{
        padding: '50px 0px 0px 400px'
    }}>
        <Card/>
        <Outlet />
    </div>
)};

export default Main;