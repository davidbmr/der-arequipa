"use client";
import React, { use, useEffect, useState } from "react";
import style from "./Oportunidades.module.css";
import Image from "next/image";
import imgOport from "../../public/Oportunidades/oportunidadimg.svg";
import calendarIcon from "../../public/Oportunidades/calendar.svg";
import plusIcon from "../../public/Oportunidades/plus.svg";
import arrowUp from "../../public/Oportunidades/arrowUp.svg";
import fileUpload from "../../public/Oportunidades/fileupload.svg";
import useModal from "@/hooks/useModal";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import InputCalendar from "@/components/CalendarInput/InputCalendar";
import DocumentUpload from "@/components/UploadInput/UploadInput";
import Link from "next/link";
import useAuthStore from "@/store/AuthState";
import axios from "axios";
import api from "@/connections/mainApi";
import formatDate from "@/helper/formateDate";
import CrearOportunidad from "./components/CrearOportunidad";
import useCategoryStore from "@/store/useCategory";

const Oportunidades = () => {
  const { Modal, hideModal, showModal } = useModal();

  const [data, setData] = useState([]);
  const authStore = useAuthStore();
  const selectedCategoryFromStore = useCategoryStore((state) => state.selectedCategory);
  const initialCategory = selectedCategoryFromStore || "Ver Todo";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const fetchData = () => {
    const url = `/api/oportunidad/estado/1`;

    api
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = selectedCategory === "Ver Todo" ? data : data.filter((item) => item?.categoria?.nombre_categoria_oportunidad === selectedCategory);

  return (
    <>
      <div className={style.oportunidades__contain}>
        <div className={style.title__oportunidades}>
          <h2>Oportunidades</h2>
          <span>Postula a la ofertas laborales que tenemos para ti</span>
        </div>
        <div className={style.oportunidades_categorias}>
          <div className={style.categorias__container}>
            <ul>
              <li onClick={() => handleCategoryChange("Ver Todo")} className={selectedCategory === "Ver Todo" ? style.active : ""}>
                Ver Todo
              </li>
              <li onClick={() => handleCategoryChange("Contratación")} className={selectedCategory === "Contratación" ? style.active : ""}>
                Contratación
              </li>
              <li onClick={() => handleCategoryChange("Formación")} className={selectedCategory === "Formación" ? style.active : ""}>
                Formación
              </li>
              <li onClick={() => handleCategoryChange("Innovación")} className={selectedCategory === "Innovación" ? style.active : ""}>
                Innovación
              </li>
              <li onClick={() => handleCategoryChange("Inversión")} className={selectedCategory === "Inversión" ? style.active : ""}>
                Inversión
              </li>
            </ul>
          </div>
          <Dropdown value={selectedCategory} className={style.select__mobile} options={categories} optionLabel="name" onChange={(e) => handleCategoryChange(e.value.name)} placeholder={selectedCategory} />

          <div>
            <button onClick={showModal}>
              <Image src={plusIcon} alt="agregarIcon" width={"auto"} height={"auto"} /> Agregar Oferta
            </button>
          </div>
        </div>
        {filteredData.map((item, index) => (
          <div key={index} className={style.oportunidades__card}>
            <div className={style.card__img}>
              <Image src={`http://84.46.241.5:4000/api/download/${item.imagen}`} alt="oportunidades" width={400} height={200} />
            </div>
            <div className={style.card__text}>
              <div className={style.tags}>
                <span className={`${style.tag} ${style[item?.categoria?.nombre_categoria_oportunidad.toLowerCase()]}`}>
                  <div className={`${style.punto} ${style[item?.categoria?.nombre_categoria_oportunidad.toLowerCase()]}`}></div> {item?.categoria?.nombre_categoria_oportunidad}
                </span>

                <Link href={`/oportunidades/${item.id_oportunidad}`} className={style.ver__oferta}>
                  Ver oferta <Image src={arrowUp} alt="calendar" width={"auto"} height={"auto"} />
                </Link>
              </div>
              <h3>{item.cargo}</h3>
              <p>{item.descripcion}</p>
              <div>
                <span className={style.calendar}>
                  <Image src={calendarIcon} alt="calendar" width={"auto"} height={"auto"} /> Fecha de publicación: {formatDate(item.updated_at)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal title={"Agregar Oportunidad"} width={"80%"}>
        <CrearOportunidad hideModal={hideModal} fetchData={fetchData} />
      </Modal>
    </>
  );
};

export default Oportunidades;

const categories = [{ name: "Ver Todo" }, { name: "Contratación" }, { name: "Formación" }, { name: "Innovación" }, { name: "Inversión" }];
