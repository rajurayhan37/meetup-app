import { Link, NavLink } from "react-router-dom";

function Navigation() {
  let activeStyle = {
    fontWeight: "600",
    color: "#ed0b70",
  };

  return (
    <header className="px-2 lg:px-16 bg-purple">
      <nav className="p-5 rounded-md flex flex-row justify-between  text-white">
        <ul className="">
          <li className="font-semibold text-light">
            <Link to={"/"} end="true">
              Tu<span className="text-pink">M</span>eet
            </Link>
          </li>
        </ul>
        <ul className="flex flex-column gap-1 md:gap-4 lg:gap-4 text-light">
          <li>
            <NavLink
              to={"/"}
              end="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All Meetup
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new-meetup"}
              end="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorite"}
              end="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
