/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

/* eslint-disable no-undef */
function Button({ children, type = null, to = null }) {
  const navigate = useNavigate();
  const base = "text-md font-medium rounded-sm px-12 py-4";
  const styles = {
    primary: base + " bg-red-500  text-slate-200 ",
    secondary: base + " bg-red-500 text-slate-200  my-8",
    green: base + " bg-green-600 text-slate-200  mt-10",
    white: base + " border border-slate-400 text-slate-900 mt-5",
  };
  if (to)
    return (
      <div
        className={
          styles[type] === styles.secondary || styles[type] === styles.checkout
            ? "flex justify-center"
            : null
        }
        onClick={() => navigate(`${to}`)}
      >
        <button className={!type ? base : styles[type]}>{children}</button>
      </div>
    );
  return (
    <div
      className={
        styles[type] === styles.secondary || styles[type] === styles.checkout
          ? "flex justify-center"
          : null
      }
    >
      <button className={!type ? base : styles[type]}>{children}</button>
    </div>
  );
}

export default Button;
