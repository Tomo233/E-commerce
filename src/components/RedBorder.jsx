/* eslint-disable react/prop-types */
function RedBorder({ children }) {
  return (
    <div className="flex gap-2 my-3">
      <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
      <p className="text-red-500 font-semibold">{children}</p>
    </div>
  );
}

export default RedBorder;
