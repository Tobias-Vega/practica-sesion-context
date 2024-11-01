import { database } from "../database/db.js";
import generarJwt from "../helpers/generarJwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = database.user.find((user) => user.username === username && user.password === password
    );

    // Validación de usuario
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar token JWT
    const token = await generarJwt(user.id);

    // Almacenar el token en una cookie segura
    res.cookie("authToken", token, {
      httpOnly: true, // La cookie no es accesible desde JavaScript
      secure: false, // Cambiar a true en producción con HTTPS
      maxAge: 3600000, // Expiración en milisegundos (1 hora)
    });

    return res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};

export const logout = (req, res) => {
try {
    res.clearCookie("authToken");
    return res.status(200).json({ message: "Successfull" })
    
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
}
};

export const session = (req, res) => {
    try {
        return res.json({
            message: "Acceso permitido a área protegida",
            user: req.user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal erver error" })
    };
};
