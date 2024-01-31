/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
function Button({ children, type = null }) {
  const base =
    "bg-red-500 text-slate-200 text-md font-medium rounded-sm px-12 py-4";
  const styles = {
    primary: base + " bg-red-500 my-8",
    green: base + " bg-green-600 mt-10",
  };
  return (
    <div
      className={styles[type] === styles.primary ? "flex justify-center" : null}
    >
      <button className={!type ? base : styles[type]}>{children}</button>
    </div>
  );
}

export default Button;
