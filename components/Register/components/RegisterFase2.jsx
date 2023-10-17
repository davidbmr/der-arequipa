import { InputText } from "primereact/inputtext";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import style from "../Register.module.css";
import api from "@/connections/mainApi";
import { useRouter } from "next/router";
import FormDataStore from "@/store/FormDataState";
import { toast } from "react-toastify";

const RegisterFase2 = ({ setFormData, formData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { resetState } = FormDataStore();

  const onSubmit = (data) => {
    const defaults = {
      id_roles: 1,
      estado: 0,
      foto: "fotoww",
    };
    const combinedData = { ...defaults, ...formData, ...data };
  
    api
      .post("/api/usuario", combinedData)
      .then((response) => {
        console.log(response.data);
        resetState();
        toast.success('Registro exitoso!');  // Notificación toast para éxito
      })
      .catch((error) => {
        console.error("Hubo un error:", error.response ? error.response.data : error.message);
        
        // Suponiendo que el servidor devuelve un mensaje "Email ya registrado" cuando el correo ya existe
        if (error.response && error.response.data.message === "Email ya registrado") {
          toast.error('El correo electrónico ya está registrado.');  // Notificación toast específica para correo existente
        } else {
          toast.error('Ha ocurrido un problema durante el registro. Por favor, inténtelo de nuevo más tarde.');  // Notificación toast genérica y profesional
        }
      });
  };
  
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.select__container}>
          <label htmlFor="email">Email*</label>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Expresión regular para validar un correo electrónico
                message: "Ingrese una dirección de correo electrónico válida",
              },
            }}
            render={({ field }) => (
              <>
                <InputText {...field} className={style.select__input} placeholder="Ingrese su correo electrónico" />
              </>
            )}
          />
        </div>

        <div className={style.select__container}>
          <label htmlFor="password">Contraseña*</label>
          <Controller
            name="password"
            control={control}
            rules={{
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            }}
            render={({ field }) => (
              <>
                <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />
              </>
            )}
          />
        </div>

        <div className={style.errores__form}>
          {errors.email && <p className={style.styleError}>{errors.email.message}</p>}

          {errors.password && <p className={style.styleError}>{errors.password.message}</p>}
        </div>
        <div className={style.btn__action}>
          <button type="submit">Empezar</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterFase2;
