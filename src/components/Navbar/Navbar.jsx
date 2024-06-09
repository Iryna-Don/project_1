import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? classes.itemLinkActive : classes.itemLink;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        {/* при активной ссылке автоматически выставляется класс .activе, но 
        при таком подходе его можно использовать только в App.css файле, 
        поскольку использование модуля css добавляет к его имени префикс и постфикс */}

        <NavLink className={setActive} to='/Profile'>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={setActive} to='/Dialogs'>
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink className={setActive} to='/News'>
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={setActive} to='/Music'>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink className={setActive} to='/Settings'>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
