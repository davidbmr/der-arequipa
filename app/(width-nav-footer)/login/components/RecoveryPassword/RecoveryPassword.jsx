import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./RecoveryPassword.module.css";

const RecoveryPasswordComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Importa watch desde react-hook-form
  } = useForm();

  const onSubmit = (data) => {
    console.log("Valor del campo de email:", data.email);
  };

  return (
    <div>
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
    </div>
  );
};

export default RecoveryPasswordComponent;
