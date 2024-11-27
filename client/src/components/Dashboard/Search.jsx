export const Search = () => {
  return (
    <label className="input bg-[#F1F5FB] rounded-3xl flex items-center md:w-0 lg:w-[50%] lg:ml-0 h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input type="text" className="grow" placeholder="Search" />
    </label>
  );
};
