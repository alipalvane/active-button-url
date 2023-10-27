import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuProps = {
  children: ReactElement;
  label: string;
  link: string;
};
const Menu = ({ children, label, link }: MenuProps) => {
  const path = useLocation().pathname;
  const variant = path === link ? "Bold" : "Solid";
  return (
    <Link to={link} className={`inline-flex item-center justify-center gap-3 px-3 py-2 rounded-md text-black ${path === link ? "bg-slate-300" : ""}`}>
      <span className="flex items-center">{React.cloneElement(children, { variant })}</span>
      <span>{label}</span>
    </Link>
  );
};

export default Menu;
