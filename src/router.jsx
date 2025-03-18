import {  createHashRouter } from "react-router-dom";

import Vision from "./page/vision";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

import VisionForm from "./components/VisionForm";
import VisionTable from "./components/visionTable";

import { Layout } from "./layout/layout";

export const route = createHashRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"vision",
                element:<Vision></Vision>,
                children:[
                    {
                        index:true,
                        element:<VisionTable></VisionTable>
                    },{
                        path:"form",
                        element:<VisionForm></VisionForm>
                    }
                ]
            }
        ]
    },
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"vision",
                element:<Vision></Vision>,
                children:[
                    {
                        index:true,
                        element:<VisionTable></VisionTable>
                    },{
                        path:"form",
                        element:<VisionForm></VisionForm>
                    }
                ]
            }
        ]
    },{
        path:'*',
        element:<NotFound></NotFound>
    }
])