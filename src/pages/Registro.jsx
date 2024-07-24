
import { useState } from "react"

const Registro = () => {

  const [showPassword, setShowPassword] = useState(false)
  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className="flex flex-col items-center justify-center m-20">
      <h1 className="text-5xl font-bold mt-5 mb-5">Registrarse</h1>
      <p></p>
      <form action="">
        <label className="input input-bordered flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input
            type={showPassword ? 'text' : 'password'}
            className="grow"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.5c-3.104 0-5.7 1.588-7.425 4.082A8.969 8.969 0 015 12c0 1.02.118 2.017.335 2.963A8.95 8.95 0 0112 17.5c3.104 0 5.7-1.588 7.425-4.082A8.969 8.969 0 0019 12c0-1.02-.118-2.017-.335-2.963A8.95 8.95 0 0012 6.5zM12 15a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8.5c-2.75 0-5.25 1.391-6.735 3.759A7.964 7.964 0 015 12c0 1.273.295 2.515.825 3.582A7.967 7.967 0 0112 16.5c2.75 0 5.25-1.391 6.735-3.759A7.964 7.964 0 0019 12c0-1.273-.295-2.515-.825-3.582A7.967 7.967 0 0112 8.5zM12 13a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            )}
          </button>
        </label>
        <input type="submit" className="btn btn-wide btn-neutral" />
      </form>
    </div>
  )
}

export default Registro;