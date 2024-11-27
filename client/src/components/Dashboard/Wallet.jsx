export const Wallet = () => {
  return (
    <div className="col-span-2 row-span-1 rounded-3xl bg-[#F1F5FB] px-5 py-5 flex flex-col place-content-center">
      <div className="flex flex-col">
        <span className="font-bold text-slate-500 mb-4 text-xl">Wallet</span>
        <span className="font-extrabold text-5xl">$4,523.98</span>
        <div className="flex flex-row justify-between py-4">
          <div className="flex flex-row items-center">
            <span className="bg-green-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="None"
                stroke="green"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="35"
                height="35"
                strokeWidth="2"
              >
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </span>
            <div className="flex flex-col ml-4">
              <span className="font-bold">$3,030.98</span>
              <span>Income</span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <span className="bg-red-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="35"
                height="35"
                strokeWidth="2"
              >
                <path d="M7 7l10 10"></path>
                <path d="M17 8l0 9l-9 0"></path>
              </svg>
            </span>
            <div className="flex flex-col ml-4">
              <span className="font-bold">$223.98</span>
              <span>Expenses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
