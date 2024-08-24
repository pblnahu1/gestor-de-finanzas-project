import TogglePasswordButton from "./TogglePasswordButton"

// eslint-disable-next-line react/prop-types
const InputField = ({ type, placeholder, icon, value, onChange, showPassword, handleTogglePassword }) => {

  const isPasswordType = type === "password";

  return (
    <label className="input input-bordered flex items-center mb-5 w-full">
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 mr-2 opacity-70"
        >
          {icon}
        </svg>
      )}
      <input
        type={isPasswordType && showPassword ? 'text' : type}
        className="grow w-auto max-w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {
        isPasswordType && (
          <TogglePasswordButton
            showPassword={showPassword}
            onClick={handleTogglePassword}
          />
        )
      }
    </label>
  )
}

export default InputField