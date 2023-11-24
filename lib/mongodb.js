import mongoose from "mongoose";
import User from '../src/models/user'; // Asegúrate de que la ruta sea correcta

export const connectMongoDB = async () => {
  if (!mongoose.connection.db) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Conectado a MongoDB");
    } catch (error) {
      console.error("Error de conexion a MongoDB:", error);
      throw error;
    }
  }
};

export const updateUser = async (id, update) => {
  try {
    const user = await User.findByIdAndUpdate(id, update, { new: true });
    return user;
  } catch (error) {
    console.error("Error actualizar usuario:", error);
    throw error;
  }
};