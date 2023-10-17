"use client";
import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import InputCalendar from "@/components/CalendarInput/InputCalendar";
import DocumentUpload from "@/components/UploadInput/UploadInput";
import useAuthStore from "@/store/AuthState";
import style from "../Oportunidades.module.css";
import axios from "axios";
import api from "@/connections/mainApi";
import { ToastContainer, toast } from "react-toastify";

const CrearOportunidad = ({ hideModal, fetchData }) => {
  const { user } = useAuthStore();
  // console.log(user?.usuario?.id_usuario)

  const { register, handleSubmit, control } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    field: { ref, value, ...inputProps },
  } = useController({
    name: "id_categoria_oportunidad",
    control,
    defaultValue: "",
  });

  const handleFileUpload = (file) => {
    setSelectedFile(file);
  };

  const onSubmit = async (formData) => {
    const defaultData = {
      titulo: "",
      id_autor: user?.usuario?.id_usuario || 1,
      descripcion: "",
      descripcion_empresa: "",
      id_categoria_oportunidad: 4,
      cargo: "",
      nombre_empresa: "",
      imagen: "",
    };

    if (selectedFile) {
      const formDataForImage = new FormData();
      formDataForImage.append("file", selectedFile);

      try {
        const uploadResponse = await axios.post("http://84.46.241.5:4000/api/upload", formDataForImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadResponse.data.message === "Archivo subido con éxito") {
          const filename = uploadResponse.data.file.originalname;

          if (!/^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/.test(filename)) {
            console.error("El nombre del archivo contiene caracteres no permitidos.");
            toast.error("El nombre del archivo contiene caracteres no permitidos.");
            return;
          }

          formData.imagen = filename;
          console.log("si se subio");
          toast.success("Imagen subida con éxito!");
        } else {
          console.error("Error in image upload:", uploadResponse.data.message || "Unknown error");
          toast.error(uploadResponse.data.message || "Error desconocido al subir la imagen.");
          return;
        }
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        toast.error("Error al subir la imagen.");
        return;
      }
    }

    const combinedData = {
      ...defaultData,
      titulo: formData.titulo || defaultData.titulo,
      id_categoria_oportunidad: formData.id_categoria_oportunidad || defaultData.id_categoria_oportunidad,
      cargo: formData.cargo || defaultData.cargo,
      descripcion: formData.descripcion || defaultData.descripcion,
      descripcion_empresa: formData.descripcion_empresa || defaultData.descripcion_empresa,
      // fechaInicio: formData.fechaInicio || defaultData.fechaInicio,
      // fechaFin: formData.fechaFin || defaultData.fechaFin,
      nombre_empresa: formData.nombre_empresa || defaultData.nombre_empresa,
      imagen: formData.imagen || defaultData.imagen,
    };

    console.log(combinedData);

    try {
      const response = await api.post("/api/oportunidad", combinedData);
      console.log(response.data);
      hideModal();
      fetchData();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <p className={style.supporting__text}>Ingresa los datos para tu oferta laboral...</p>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formulario__container}>
        <div className={style.select__container} style={{width: "100%"}}>
          <label htmlFor="id_categoria_oportunidad">Tipo de oportunidad*</label>
          <Dropdown inputRef={ref} value={value} onChange={(e) => inputProps.onChange(e.value)} onBlur={inputProps.onBlur} className={style.select__input} placeholder="Seleccionar" options={options} />
        </div>

        <div className={style.input__modal__group}>
          <div className={style.select__container} >
            <label htmlFor="titulo">Titulo*</label>
            <InputText {...register("titulo")} className={style.select__input} placeholder="Ingrese texto" />
          </div>
          <div className={style.select__container} >
            <label htmlFor="cargo">Cargo*</label>
            <InputText {...register("cargo")} className={style.select__input} placeholder="Ingrese texto" />
          </div>
        </div>

        <div className={style.input__modal__group}>
          <div className={style.select__container} >
            <label htmlFor="descripcion">Descripcion*</label>
            <InputTextarea {...register("descripcion")} rows={7} cols={30} placeholder="Descripcion..." />
          </div>
          <div className={style.select__container}>
            <label htmlFor="descripcion_empresa">Descripcion Empresa*</label>
            <InputTextarea {...register("descripcion_empresa")} rows={7} cols={30} placeholder="Descripcion..." />
          </div>

          {/* <div style={{ width: "50%" }}>
            <div className={style.select__container}>
              <label htmlFor="tiempoContratacion">Tiempo de contratación*</label>
              <div className={style.calendar__range}>
                <InputCalendar {...register("fechaInicio")} />
                <span className={style.range__divider}>hasta</span>
                <InputCalendar {...register("fechaFin")} />
              </div>
            </div>
          </div> */}
          <DocumentUpload onDocumentUpload={handleFileUpload} />
        </div>

        <div className={style.select__container}>
          <label htmlFor="nombre_empresa">Empresa*</label>
          <InputText {...register("nombre_empresa")} className={style.select__input} placeholder="Ingrese texto" />
        </div>

        <button className={style.btn__publicar} type="submit">
          Publicar
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default CrearOportunidad;

const options = [
  { label: "Opción 1", value: 1 },
  { label: "Opción 2", value: 2 },
  { label: "Opción 3", value: 3 },
];
