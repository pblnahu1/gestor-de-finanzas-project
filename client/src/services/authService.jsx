// services/authService.js
export const login = async (email, password) => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}` || "http://localhost:3001";
  const response = await fetch(`${URL}/api/login`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas"); // devuelve error 401 (la api devuelve estado correcto cuando las credenciales son incorrectas)
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data; // Se espera que el backend devuelva un objeto { token }
};


export const register = async (email,password,username,name,apellido) => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}` || "http://localhost:3001";
  const response = await fetch(`${URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username, name, apellido }),
  });

  if(!response.ok){
    const errData = await response.json();
    throw new Error(errData.message || "Error al registrar usuario");
  }

  return response.json();
}