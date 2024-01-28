/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
function Button({ children, type = null }) {
  const base =
    "bg-red-500 text-slate-200 text-md font-medium rounded-sm px-8 py-4 ";
  const styles = {
    primary: base + "my-8",
  };
  return (
    <div className="flex justify-center">
      <button className={!type ? base : styles[type]}>{children}</button>
    </div>
  );
}

export default Button;
