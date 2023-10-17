"use client";

import React from "react";
import personIcon from "@/public/avatarExample.svg";

import style from "../perfil-usuario/PerfilUsuario.module.css";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

const Quizz = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      mentor_incubadora: data.rol_0,
      experiencia_emprendimiento: data.rol_1,
      programas_capacitacion: data.rol_2,
    };

    console.log(formData);
  };

  return (
    <div className={style.perfil__contenedor}>
      <div className={style.perfil__container__formulario}>
        <h3>Quizz</h3>
        <p>Selecciona la alternativa de acuerdo a como te identifiques.</p>

        <form onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
          <div style={{ width: "100%" }}>
            {questions.map((question, index) => (
              <div className={style.pregunta} key={index}>
                <h2>{question.text}</h2>
                <div className={style.select__quizz}>
                  <Controller name={`rol_${index}`} control={control} render={({ field }) => <Dropdown {...field} className={style.select__dropdown} placeholder="Seleccionar" options={options} />} />
                </div>

                {index < questions.length - 1 && <div className={style.line}></div>}
              </div>
            ))}
          </div>
          <div className={style.btn__container}>
            <button>Cancelar</button>
            <button type="submit">Guardar cambios</button>
          </div>
        </form>
        <div className={style.informacion__adicional} style={{flexDirection: 'column'}}>
          <div className={style.informacion__adicional__text}>
            <h3>Resultado</h3>
            <p>Gracias por tu tiempo.</p>
            <p>Según el resultado del quiz, te identifica como <span>“Nombre del rol”</span>.</p>
          </div>
          <div className={style.btn__container}>
           <Link href={'/perfil-usuario'}>
           <button>Cancelar</button>
           </Link>
            <button type="submit">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;

const questions = [
  {
    name: "mentor_incubadora",
    text: "¿Eres mentor de alguna incubadora o aceleradora?",
  },
  {
    name: "experiencia_emprendimiento",
    text: "¿Has fundado alguna empresa?",
  },
  {
    name: "programas_capacitacion",
    text: "¿Ha realizado alguna investigación científica o tecnológica?",
  },
  {
    name: "programas_capacitacion",
    text: "¿Has brindado asesoría consultoría en temas específicos de innovación?",
  },
  {
    name: "programas_capacitacion",
    text: "¿Has levantado fondos concursables del Pro Innóvate, CECyTEC o alguna entidad del estado?",
  },
  {
    name: "programas_capacitacion",
    text: "¿Has levantado fondos concursables de alguna entidad del privada o del extranjero con mi investigación, propuesta o emprendimiento?",
  },
  {
    name: "programas_capacitacion",
    text: "He recibido algún reconocimiento o premio local o nacional por mi trabajo de investigación, invención o propuesta disruptiva considerada como innovadora.",
  },
  {
    name: "programas_capacitacion",
    text: "Puedo demostrar que mis acciones de tienen impacto y afectan positivamente algunos indicadores de los ODS.",
  },
  {
    name: "programas_capacitacion",
    text: "En cuanto a transferencia del conocimiento.",
  },
  {
    name: "programas_capacitacion",
    text: "En cuanto a proyectos emblemáticos de alto impacto.",
  },
  {
    name: "programas_capacitacion",
    text: "En cuanto a herramientas y metodologías para la innovación.",
  },
  {
    name: "programas_capacitacion",
    text: "En cuanto a vinculación con el ecosistema.",
  },
];

// Array de opciones para simular la selección
const options = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
];
