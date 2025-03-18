import { NavLink, Outlet } from "react-router-dom";

export default function Vision() {

    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-2 border">
                    <NavLink className="nav-link py-2" to='/vision'>查看願景紀錄</NavLink>
                    <NavLink className="nav-link py-2" to='/vision/form'>填寫新願景</NavLink>
                </div>
                <div className="col-8">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>

    )
}