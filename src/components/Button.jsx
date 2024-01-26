/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
function Button({ children }) {
  return (
    <div className="flex justify-center mt-8">
      <button className="bg-red-500 text-slate-200 text-md font-medium rounded-sm px-8 py-4">
        {children}
      </button>
    </div>
  );
}

export default Button;
