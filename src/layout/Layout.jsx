import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import { useAuth } from '../AuthProvider';
import GoogleLoginButton from "../components/GoogleLoginButton";

export function Layout() {

    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        {/* 網站Logo */}
                        <NavLink className="navbar-brand" to="/">12週計畫小幫手</NavLink>
                        {/* rwd下拉選單 */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* menu */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav align-items-center justify-content-between">
                                <li className="nav-item">
                                    <NavLink className="navbar-brand" to="/vision">願景版</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center justify-content-between ms-auto gap-3">
                                {user ? (
                                    <li>
                                        你好, {user.user_metadata.full_name}
                                    </li>
                                ) : (
                                    <></>
                                )}

                                {user ? (
                                    <li>
                                        <button className="btn btn-secondary" onClick={() => {
                                            supabase.auth.signOut();
                                            navigate('/');
                                        }}>登出</button>
                                    </li>
                                ) : (
                                    <li><GoogleLoginButton /></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>


    )
}