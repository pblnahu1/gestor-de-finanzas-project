export const PayableAccounts = () => {
  return (
    <div className="col-span-2 row-span-4 rounded-3xl bg-[#F1F5FB] px-5 py-10">
      <div className="rounded-xl bg-[#f8faff] p-5 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900">Payable Accounts</h3>
        <p className="text-sm text-gray-500 mt-1">
          Keep your accounts up to date to avoid issues
        </p>

        <div className="mt-4">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-gray-800">14 OUT OF 16</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-gray-800 h-2 rounded-full"
              style={{ width: "87.5%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <span className="text-xl font-bold">Receipts</span>
        <div className="flex flex-row items-center my-5">
          <span className="bg-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="None"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="45"
              height="45"
              strokeWidth="2"
            >
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </span>
          <div className="flex flex-col ml-5">
            <span className="text-xl font-semibold">$5,000.00</span>
            <span className="text-xl text-slate-500">Salary</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-5">
          <span className="bg-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="None"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="45"
              height="45"
              strokeWidth="2"
            >
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </span>
          <div className="flex flex-col ml-5">
            <span className="text-xl font-semibold">$593.00</span>
            <span className="text-xl text-slate-500">Service</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-5">
          <span className="bg-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="None"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="45"
              height="45"
              strokeWidth="2"
            >
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </span>
          <div className="flex flex-col ml-5">
            <span className="text-xl font-semibold">$3,030.98</span>
            <span className="text-xl text-slate-500">Rent or Mortgage</span>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-400"></div>
      <div className="py-5">
        <span className="text-xl font-bold">Payables</span>
        <div className="flex flex-row items-center my-5">
          <span className="bg-white rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="30"
              height="30"
              strokeWidth="2"
            >
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
            </svg>
          </span>

          <div className="flex flex-col ml-5">
            <span className="text-xl font-semibold">$202.98</span>
            <span className="text-xl text-slate-500">Electricity Bill</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-5">
          <span className="bg-white rounded-md p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="30"
              height="30"
              strokeWidth="2"
            >
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
            </svg>
          </span>

          <div className="flex flex-col ml-5">
            <span className="text-xl font-semibold">$3,030.98</span>
            <span className="text-xl text-slate-500">Rent or Mortgage</span>
          </div>
        </div>
      </div>
    </div>
  );
};
