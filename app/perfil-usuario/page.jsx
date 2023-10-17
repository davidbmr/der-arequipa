"use client";

import React from "react";
import personIcon from "@/public/avatarExample.svg";

import style from "./PerfilUsuario.module.css";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import DocumentUpload from "@/components/UploadInput/UploadInput";

import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import api from "@/connections/mainApi";
import useAuthStore from "@/store/AuthState";

const PerfilUsuario = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuthStore();

  const onSubmit = async (data) => {
    try {
      const payload = {
        nombre: data.nombres,
        apellido: data.apellidos,
        telefono: data.telefono,
        foto: "fotohermosa",
        perfil_linkedin: data.linkedinPerfil,
        id_estado_cuenta: 1,
        id_profesiones: 1,
        id_especialidades: 1,
        id_lugar_trabajos: 1,
        curriculum: null,
      };

      const response = await api.put("/api/usuario/1", payload);

      console.log(response.data);
      if (response.status === 200) {
        reset({
          nombres: "",
          apellidos: "",
          email: "",
          telefono: "",
          profesion: "",
          rol: "",
          linkedinPerfil: "",
          // ... otros campos
        });
      }
    } catch (error) {
      console.error("Hubo un error al enviar los datos:", error);
      // Aquí puedes agregar lógica adicional en caso de que haya ocurrido un error.
    }
  };

  return (
    <div className={style.perfil__contenedor}>
      <div className={style.perfil__container__formulario}>
        <h3>Información personal</h3>
        <p>Actualice aquí su foto y sus datos personales.</p>

        <form onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
          <div className={style.input__group}>
            <div className={style.select__container}>
              <label htmlFor="nombres">Nombres*</label>
              <Controller
                name="nombres"
                control={control}
                rules={{ required: "Este campo es obligatorio" }}
                render={({ field }) => (
                  <>
                    <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />
                    {errors.nombres && <p style={styleError}>{errors.nombres.message}</p>}
                  </>
                )}
              />
            </div>

            <div className={style.select__container}>
              <label htmlFor="apellidos">Apellidos*</label>
              <Controller
                name="apellidos"
                control={control}
                rules={{ required: "Este campo es obligatorio" }}
                render={({ field }) => (
                  <>
                    <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />
                    {errors.apellidos && <p style={styleError}>{errors.apellidos.message}</p>}
                  </>
                )}
              />
            </div>
          </div>

          <div className={style.select__container}>
            <label htmlFor="">Email</label>
            <Controller name="email" control={control} render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />} />
          </div>

          <div className={style.input__group}>
            <div className={style.select__container}>
              <label htmlFor="">Teléfono</label>
              <Controller name="telefono" control={control} render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />} />
            </div>

            <div className={style.select__container}>
              <label htmlFor="">Profesión</label>
              <Controller name="profesion" control={control} render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />} />
            </div>
          </div>

          <div className={style.select__container}>
            <label htmlFor="">Rol</label>
            <Controller name="rol" control={control} render={({ field }) => <Dropdown {...field} className={style.select__input} placeholder="Seleccionar" />} />
          </div>

          <div className={style.select__container}>
            <label htmlFor="">Perfil de LinkedIN</label>
            <Controller name="linkedinPerfil" control={control} render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />} />
          </div>

          <div className={style.avatar__container}>
            <Image src={personIcon} alt="person" height={"auto"} width={"auto"} className={style.avatar__img} />
            <div className={style.select__container}>
              <DocumentUpload />
            </div>
          </div>

          <div className={style.btn__container}>
            <button>Cancelar</button>
            <button type="submit">Guardar cambios</button>
          </div>
        </form>

        <div className={style.informacion__adicional}>
          <div className={style.informacion__adicional__text}>
            <h3>Información adicional</h3>
            <p>Identifica tu rol resolviendo este quiz</p>
          </div>
          <Link href={"/quizz"}>
            <button>Empezar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;

const styleError = {
  color: "red",
};
