// import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { query } from "../config/db.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  
  try {
    console.log("Iniciando sesion con email:",email)
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);
    console.log("Resultado de la consulta:",result.rows)
    const user = result.rows[0];
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "my_secret_key",
      { expiresIn: "1h" }
    );
    console.log("Token generado con éxito:",token)
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export default loginUser;
