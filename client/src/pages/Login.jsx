/* eslint-disable react/prop-types */
import InputField from '../components/InputField';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginPage = ({ handleStartLoginRegistroClick, handleStartHomeDashboardCLick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); 

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    document.title = 'Iniciar Sesión';
    setIsSubmitDisabled(!email || !password);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      const { token } = await login(email, password);
      
      console.log(token);
  
      if(token) {
        localStorage.setItem('token', token);
        navigate(handleStartHomeDashboardCLick);
      } else {
        setErrorMessage("No se recibió un token del servidor");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-0 lg:my-10">
      <h1 className="m-0 text-3xl font-bold md:text-5xl lg:m-5">Iniciar Sesión</h1>
      <span className="mb-5 text-center">
        La autenticación ahora se realiza contra el backend.
      </span>

      {errorMessage && (
        <p className="mb-4 text-red-500">
          {errorMessage}
        </p>
      )}

      <form
        className="flex flex-col items-center justify-center w-full md:w-2/5"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          handleTogglePassword={handleTogglePassword}
        />

        <p>
          <a
            className="flex flex-col mt-4 mb-4 text-center cursor-pointer"
            onClick={handleStartLoginRegistroClick}
          >
            ¿No tenés una cuenta? ¡Registrate!
          </a>
        </p>

        <input
          type="submit"
          className="btn btn-wide btn-neutral"
          disabled={isSubmitDisabled}
        />
      </form>
    </div>
  );
};

export default LoginPage;
