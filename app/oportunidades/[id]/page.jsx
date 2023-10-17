"use client";
import React, { useEffect, useState } from "react";
import style from "../Oportunidades.module.css";
import Image from "next/image";
import Banner from "../../../public/Oportunidades/imgBanner.svg";
import calendarIcon from "../../../public/Oportunidades/calendar.svg";
import checkIcon from "../../../public/Oportunidades/checkIcon.svg";
import { useParams } from "next/navigation";
import api from "@/connections/mainApi";
import formatDate from "@/helper/formateDate";

const Page = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Detalle de la oferta");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const fetchData = () => {
    const url = `/api/oportunidad/${id}`
    api.get(url)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  console.log(data)

  return (
    <div className={style.oportunidades_id_container}>
     <Image src={`http://84.46.241.5:4000/api/download/${data.imagen}`} alt="oportunidades" className={style.card__img__banner}  width={500} height={200}/>
      <div className={style.header__container_id}>
        <h2>{data.titulo}</h2>
        <div className={style.contenedor__subtitle}>
          <span className={`${style.tag__id} ${style.formación}`}>
            <div className={`${style.punto} ${style.formación}`}></div> {data.categoria?.nombre_categoria_oportunidad}
          </span>

          <div className={style.fechas}>
            <span className={style.calendar}>
              <Image src={calendarIcon} alt="calendar" width={"auto"} height={"auto"} /> Fecha de publicación: {formatDate(data.updated_at)}
            </span>
            <span className={style.calendar}>
              <Image src={calendarIcon} alt="calendar" width={"auto"} height={"auto"} /> Finaliza: 2020-12-12
            </span>
          </div>
        </div>
      </div>

      <div className={style.categorias__container__id}>
        <ul>
          <li onClick={() => handleCategoryChange("Detalle de la oferta")} className={selectedCategory === "Detalle de la oferta" ? style.active : ""}>
            Detalle de la oferta
          </li>
          <li onClick={() => handleCategoryChange("La empresa")} className={selectedCategory === "La empresa" ? style.active : ""}>
            La empresa
          </li>
        </ul>
      </div>

      <div className={style.content__contenedor}>
        {selectedCategory === "Detalle de la oferta" && (
          <>
            <p>
              <b>Cargo: {data.cargo}</b>
            </p>
            <div className={style.funciones__contenedor}>
              <p>
                <b>Funciones: </b>
              </p>
              <span>{data.descripcion}</span>
              {/* <ul>
                <li>
                  <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, tempora.
                </li>
                <li>
                  <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, tempora.
                </li>
                <li>
                  <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, tempora.
                </li>
                <li>
                  <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, tempora.
                </li>
                <li>
                  <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, tempora.
                </li>
              </ul> */}
            </div>
            <p>
              {/* <b>Tiempo de contratación:</b> */}
            </p>
            <span className={style.calendar}>
              <Image src={calendarIcon} alt="calendar" width={"auto"} height={"auto"} /> 2020-12-12 - 2020-12-12
            </span>
          </>
        )}

        {selectedCategory === "La empresa" && (
          <div className={style.la__empresa}>
               <h2>{data.cargo}</h2>
            <p>
             {data.descripcion_empresa}
            </p>

            <button>Postular</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
