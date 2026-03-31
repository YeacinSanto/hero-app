import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Components/Root/Root";
import HomePage from "../Components/HomePage/HomePage";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {   index:true, 
                loader: ()=>fetch('app.json').then(res=>res.json()),
                Component: HomePage
            },
            {
                path:'/app', 
                loader: ()=>fetch("app.json").then(res=>res.json()),
                Component: Apps},
            {path: '/installation', Component: Installation}
        ]
    }
])