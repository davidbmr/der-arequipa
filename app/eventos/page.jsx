"use client";
import React from "react";

import style from "./Eventos.module.css";
import { Dropdown } from "primereact/dropdown";

import megafonoIcon from "@/public/Eventos/eventomegafonoIcon.svg";
import banderaIcon from "@/public/Eventos/banderaRedIcon.svg";
import Image from "next/image";

const page = () => {
  // Crear una matriz de datos con 8 objetos
  const eventData = [
    {
      id: 1,
      category: "Music",
      eventName: "Jazz in the Park",
      status: "Available",
      opening: "Start Date: 15th August 2023",
      closing: "End Date: 17th August 2023",
    },
    {
      id: 2,
      category: "Theatre",
      eventName: "Shakespeare Revival",
      status: "Sold Out",
      opening: "Start Date: 10th September 2023",
      closing: "End Date: 20th September 2023",
    },
    {
      id: 3,
      category: "Art",
      eventName: "Modern Art Exhibition",
      status: "Available",
      opening: "Start Date: 1st October 2023",
      closing: "End Date: 10th October 2023",
    },
    {
      id: 4,
      category: "Literature",
      eventName: "Poetry Reading Evening",
      status: "Available",
      opening: "Start Date: 5th November 2023",
      closing: "End Date: 7th November 2023",
    },
    {
      id: 5,
      category: "Dance",
      eventName: "Contemporary Dance Workshop",
      status: "Available",
      opening: "Start Date: 20th November 2023",
      closing: "End Date: 22nd November 2023",
    },
    {
      id: 6,
      category: "Food & Drink",
      eventName: "Wine Tasting Event",
      status: "Sold Out",
      opening: "Start Date: 25th December 2023",
      closing: "End Date: 27th December 2023",
    },
    {
      id: 7,
      category: "Workshop",
      eventName: "Photography Masterclass",
      status: "Available",
      opening: "Start Date: 10th January 2024",
      closing: "End Date: 12th January 2024",
    },
    {
      id: 8,
      category: "Cultural",
      eventName: "Heritage Walk",
      status: "Available",
      opening: "Start Date: 15th February 2024",
      closing: "End Date: 17th February 2024",
    }
];



  return (
    <div className={style.eventos__container}>
      <div className={style.header__text}>
        <h2>Calendario de eventos</h2>

        <div className={style.select__group}>
          <div className={style.select__container}>
            <label htmlFor="">Seleccionar mes</label>
            <Dropdown className={style.select__input} placeholder="Seleccionar" />
          </div>
          <div className={style.select__container}>
            <label htmlFor="">Categoría</label>
            <Dropdown className={style.select__input} placeholder="Seleccionar" />
          </div>
          <div className={style.select__container}>
            <label htmlFor="">Vigencia</label>
            <Dropdown className={style.select__input} placeholder="Seleccionar" />
          </div>
        </div>
        <button>Buscar</button>
      </div>

      <div className={style.eventos__mes__container}>
        <h2>Octubre</h2>

        <div className={style.card__container__evento}>
          {/* <h3>Nombre de categoría</h3> */}

          <div className={style.card__eventos__grid}>
            {/* Mapear los objetos de la matriz de datos en card__evento */}
            {eventData.map((event) => (
              <div key={event.id} className={style.card__evento}>
                <div className={style.tag__evento}>
                  <div className={style.point__tag}></div>
                  <span>{event.status}</span>
                </div>
                <h4>{event.eventName}</h4>
                <div className={style.status__group}>
                  <Image src={megafonoIcon} alt="megafonoIcon" width={"auto"} height={"auto"} />
                  <span>{event.opening}</span>
                </div>
                <div className={style.status__group}>
                  <Image src={banderaIcon} alt="banderaIcon" width={"auto"} height={"auto"} />
                  <span>{event.closing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
