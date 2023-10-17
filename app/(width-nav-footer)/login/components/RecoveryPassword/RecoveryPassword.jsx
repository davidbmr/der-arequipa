import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./RecoveryPassword.module.css";
import api from "@/connections/mainApi";

const RecoveryPasswordComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Importa watch desde react-hook-form
  } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await api.post("/api/recovery", data); // Reemplaza "URL_DE_TU_API" por la URL correcta de tu servidor API.
      if (response.status === 200) {
        // La solicitud POST fue exitosa
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };
  return (
    <div>
      {isSuccess ? (
        <div>
          <p>¡Hola, se envió!</p>
          {/* Puedes agregar aquí cualquier contenido adicional que desees mostrar en caso de éxito */}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.form__inputs}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <div className={style.error}>{errors.email.message}</div>}
          </div>
          <div className={style.btn__action}>
            <button type="submit">Restablecer contraseña</button>
          </div>
        </form>
      )}
    </div>
  );
};
export default RecoveryPasswordComponent;
