
import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <>
            <nav>
                <Link to="/admin/admindashboard">
                    Admin Dashboard
                </Link>

                <Link to="/admin/settings">
                    Settings
                </Link>

                <Link to="/admin/userdetails">
                    User Details
                </Link>
            </nav>

            <Outlet />
        </>
    );
}

export default Adminlayout;
