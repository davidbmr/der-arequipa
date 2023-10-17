import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useForm, Controller } from "react-hook-form";
import RegisterFase2 from "./components/RegisterFase2";
import FormDataStore from "@/store/FormDataState";

import arrowLeftIcon from "@/public/Autenticacion/arrowLeft.svg";
import Image from "next/image";
import api from "@/connections/mainApi";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [profesiones, setProfesiones] = useState([]);
  const [lugarTrabajo, setLugarTrabajo] = useState([]);
  const [especialidad, setespecialidad] = useState([]);

  const { isFase2, formData, setFormData, toggleFase2 } = FormDataStore();

  const onSubmit = (data) => {
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === undefined) {
        data[key] = "";
      }
    });

    if (isFase2) {
      const combinedData = { ...formData, ...data };
      console.log(combinedData);

      if (Object.keys(formData).length === 0) {
        reset();
      }
    } else {
      setFormData(data);
      toggleFase2();
      reset();
    }
  };

  useEffect(() => {
    const endpoints = ["/api/profesion", "/api/lugar_trabajo", "/api/especialidad"];

    async function fetchData() {
      try {
        const responses = await Promise.all(endpoints.map((endpoint) => api.get(endpoint)));

        console.log(responses.data);
        setProfesiones(responses[0].data);
        setLugarTrabajo(responses[1].data);
        setespecialidad(responses[2].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isFase2 ? (
        <RegisterFase2 control={control} errors={errors} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
          <div className={style.input__group}>
            <div className={style.select__container}>
              <label htmlFor="nombre">Nombres*</label>
              <Controller
                name="nombre"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => (
                  <>
                    <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />
                    {errors.nombre && <p style={styleError}>{errors.nombre.message}</p>}
                  </>
                )}
              />
            </div>

            <div className={style.select__container}>
              <label htmlFor="apellido">Apellidos*</label>
              <Controller
                name="apellido"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => (
                  <>
                    <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />
                    {errors.apellido && <p style={styleError}>{errors.apellido.message}</p>}
                  </>
                )}
              />
            </div>
          </div>

          <div className={style.input__group}>
            <div className={style.select__container}>
              <label htmlFor="">Profesión*</label>
              <Controller
                name="id_profesiones"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    className={style.select__input}
                    placeholder="Seleccionar"
                    options={profesiones.map((profesion) => ({
                      label: profesion.nombre_profesion,
                      value: profesion.id_profesiones,
                    }))}
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                  />
                )}
              />
            </div>

            <div className={style.select__container}>
              <label htmlFor="">Especialidad*</label>
              <Controller
                name="id_especialidades"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    className={style.select__input}
                    placeholder="Seleccionar"
                    options={especialidad.map((especialidad) => ({
                      label: especialidad.nombre_especialidad,
                      value: especialidad.id_especialidades,
                    }))}
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className={style.select__container}>
            <label htmlFor="">Lugar de trabajo*</label>
            <Controller
              name="id_lugar_trabajos"
              control={control}
              rules={{ required: "Este campo es obligatorio" }} // Marked as required
              render={({ field }) => (
                <Dropdown
                  {...field}
                  className={style.select__input}
                  placeholder="Seleccionar"
                  options={lugarTrabajo.map((lugarTrabajo) => ({
                    label: lugarTrabajo.nombre_lugar_trabajo,
                    value: lugarTrabajo.id_lugar_trabajos,
                  }))}
                  onChange={(e) => {
                    field.onChange(e.value);
                  }}
                />
              )}
            />
          </div>

          <div className={style.input__group}>
            <div className={style.select__container}>
              <label htmlFor="telefono">Télefono</label>
              <Controller
                name="telefono"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />}
              />
            </div>
            <div className={style.select__container}>
              <label htmlFor="perfil_linkedin">Perfil de LinkedIN</label>
              <Controller
                name="perfil_linkedin"
                control={control}
                rules={{ required: "Este campo es obligatorio" }} // Marked as required
                render={({ field }) => <InputText {...field} className={style.select__input} placeholder="Ingrese texto" />}
              />
            </div>
          </div>

          <div className={style.next__span}>
            <button type="submit">Siguiente paso</button>
            <Image src={arrowLeftIcon} alt="arrow" width={"auto"} height={"auto"} />
          </div>
        </form>
      )}
    </>
  );
};

export default Register;

const styleError = {
  color: "#e4140dd3",
};
