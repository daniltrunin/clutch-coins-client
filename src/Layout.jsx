import { Outlet, Link, useLocation } from "react-router-dom";

import home from "../src/assets/home.png";
import profile from "../src/assets/profile.png";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="mb-8">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-black/25 py-1">
        <nav className="flex justify-around py-3 px-16 w-full">
          <Link to="/">
            <a>
              <img
                className={location.pathname === "/" ? "" : "brightness-50"}
                src={home}
              />
            </a>
          </Link>
          <Link to="/profile">
            <a>
              <img
                className={
                  location.pathname === "/profile" ? "" : "brightness-50"
                }
                src={profile}
              />
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
