import { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import handleClickDash from '../logica/handleClickDash';
// import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LoginPage = ({ handleStartLoginRegistroClick, handleStartHomeDashboardCLick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    document.title = 'Iniciar Sesión'

    // habilito/deshabilito el boton de envio según si los campos están vacíos
    if (email && password) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
    // setIsSubmitDisabled(!email || !password);
  }, [email, password]);

  return (
    <div className="flex flex-col items-center justify-center m-5 md:m-20">
      <h1 className="text-3xl md:text-5xl font-bold mt-5 mb-5">Iniciar Sesión</h1>

      <form className="flex flex-col items-center justify-center w-full md:w-2/5" onSubmit={handleClickDash(handleStartHomeDashboardCLick)}>
        

        <InputField
          type="text"
          placeholder="Email"
          icon={
            <>
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </>
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        
        <InputField
          type='password'
          placeholder="Password"
          icon={
            <>
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </>
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          showPassword={showPassword}
          handleTogglePassword={handleTogglePassword}
        />

        
        <p>
          <a
            className="cursor-pointer flex flex-col mt-4 mb-4 text-center"
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
