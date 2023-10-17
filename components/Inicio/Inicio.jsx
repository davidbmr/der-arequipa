"use client";
import React, { use } from "react";

import style from "./Inicio.module.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Image from "next/image";
import vector2 from "@/public/Home/vector2.svg";
import arrowIcon from "@/public/Home/arrowIcon.svg";
import imgOport from "@/public/Oportunidades/oportunidadimg.svg";
import Link from "next/link";
import arrowUp from "@/public/Oportunidades/arrowUp.svg";
import calendarIcon from "@/public/Oportunidades/calendar.svg";
import CarouselHome from "./components/CarouselHome";
import imgBanner from "@/public/Home/img2.svg";
import useCategoryStore from "@/store/useCategory";
import { useRouter } from "next/navigation";

const Inicio = () => {
  const setCategory = useCategoryStore((state) => state.setCategory);
  const router = useRouter();

  return (
    <div className={style.inicio__container}>
      <div className={style.header__container}>
        <div className={style.header__text}>
          <h2>¡Hola! Has llegado al lugar correcto</h2>
          <p>En iDeA trabajamos por el desarrollo de la innovación y el emprendimiento en Arequipa. Tenemos muchas oportunidades para ti.</p>

          <div className={style.select__group}>
            <div className={style.select__container}>
              <label htmlFor="">Perfil</label>
              <Dropdown className={style.select__input} placeholder="Seleccionar" />
            </div>
            <div className={style.select__container}>
              <label htmlFor="">Busco</label>
              <Dropdown className={style.select__input} placeholder="Seleccionar" />
            </div>
            <div className={style.select__container}>
              <label htmlFor="">Áreas</label>
              <Dropdown className={style.select__input} placeholder="Seleccionar" />
            </div>
          </div>
          <button>Ir allá</button>
        </div>

        <div className={style.header__img}></div>
      </div>

      <div className={style.oportunidades__container}>
        <Image src={vector2} alt="vector 2" width={"auto"} height={"auto"} className={style.vector2} />
        <div className={style.oportunidades__title__container}>
          <span>¡Postula!</span>
          <h2>Nuevas oportunidades</h2>
          <p>En iDeA te traemos diferentes opciones para que puedas seguir impulsándote.</p>
        </div>

        <div className={style.categorias__container}>
          <div className={style.categoria__box}>
            <p>Contratación</p>
            <span
              onClick={() => {
                setCategory("Contratación");
                router.push("/oportunidades");
              }}
            >
              Ver más <Image src={arrowIcon} alt="arrow" width={"auto"} height={"auto"} className={style.arrow} />
            </span>
          </div>
          <div className={style.categoria__box}>
            <p>Innovación</p>
            <span
              onClick={() => {
                setCategory("Innovación");
                router.push("/oportunidades");
              }}
            >
              Ver más <Image src={arrowIcon} alt="arrow" width={"auto"} height={"auto"} className={style.arrow} />
            </span>
          </div>
          <div className={style.categoria__box}>
            <p>Formación</p>
            <span
              onClick={() => {
                setCategory("Formación");
                router.push("/oportunidades");
              }}
            >
              Ver más <Image src={arrowIcon} alt="arrow" width={"auto"} height={"auto"} className={style.arrow} />
            </span>
          </div>
          <div className={style.categoria__box}>
            <p>Inversión</p>
            <span
              onClick={() => {
                setCategory("Inversión");
                router.push("/oportunidades");
              }}
            >
              Ver más <Image src={arrowIcon} alt="arrow" width={"auto"} height={"auto"} className={style.arrow} />
            </span>
          </div>
        </div>
        {data.map((item, index) => (
          <div key={index} className={style.oportunidades__card}>
            <div className={style.card__img}>
              <Image src={imgOport} alt="oportunidades" height={"auto"} width={"auto"} />
            </div>
            <div className={style.card__text}>
              <div className={style.tags}>
                <span className={`${style.tag} ${style[item.category.toLowerCase()]}`}>
                  <div className={`${style.punto} ${style[item.category.toLowerCase()]}`}></div> {item.category}
                </span>

                <Link href={`/oportunidades/${item.id}`} className={style.ver__oferta}>
                  Ver oferta <Image src={arrowUp} alt="calendar" width={"auto"} height={"auto"} />
                </Link>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <span className={style.calendar}>
                  <Image src={calendarIcon} alt="calendar" width={"auto"} height={"auto"} /> Fecha de publicación: {item.publicationDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.carousel__container}>
        <h2>Últimas noticias</h2>
        <p style={{padding: "0 1rem"}}>Entérate de las novedades que traemos para ti.</p>
        <CarouselHome />
      </div>

      <div className={style.oportunidades__container}>
        <Image src={vector2} alt="vector 2" width={"auto"} height={"auto"} className={style.vector2} />
        <div className={style.eventos__title__container}>
          <h2>Eventos durante esta semana</h2>
          <p>No te pierdas nuestros eventos virtuales y presenciales.</p>
        </div>

        <div className={style.eventos__semana__container}>
          <div className={style.content__card}>
            <Image src={imgBanner} alt="oportunidades" height={"auto"} width={"auto"} />
            <div className={style.contenido__carousel}>
              <h3 className={style.card__title}>Título de la noticia</h3>
              <p className={style.card__description}>Descripción de la noticia (Máx se debe mostrar 2 líneas).</p>

              <div className={style.contenido__carousel__footer}>
                <span className={style.card__author}>Nombre del autor</span>
                <p className={style.card__date}>24 agosto 2023</p>
              </div>
            </div>
          </div>
          <div className={style.ultimos__eventos__2}>
            <div className={style.content__card__item__hijo}>
              <Image src={imgBanner} alt="oportunidades" height={"auto"} width={"auto"} />
              <div className={style.contenido__carousel}>
                <h3 className={style.card__title}>Título de la noticia</h3>
                <p className={style.card__description}>Descripción de la noticia (Máx se debe mostrar 2 líneas).</p>

                <div className={style.contenido__carousel__footer}>
                  <span className={style.card__author}>Nombre del autor</span>
                  <p className={style.card__date}>24 agosto 2023</p>
                </div>
              </div>
            </div>
            <div className={style.content__card__item__hijo}>
              <Image src={imgBanner} alt="oportunidades" height={"auto"} width={"auto"} />
              <div className={style.contenido__carousel}>
                <h3 className={style.card__title}>Título de la noticia</h3>
                <p className={style.card__description}>Descripción de la noticia (Máx se debe mostrar 2 líneas).</p>

                <div className={style.contenido__carousel__footer}>
                  <span className={style.card__author}>Nombre del autor</span>
                  <p className={style.card__date}>24 agosto 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.contacto__container}>
        <h2>Conéctate con iDeA</h2>
        <p>Suscríbete para mantenerte actualizado(a) con nuestras últimas noticias.</p>
        <div className={style.input__correo}>
          <InputText placeholder="Ingresa tu correo" />
          <button>Suscribete</button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

const data = [
  {
    id: 1,
    title: "ALIANZAS INTERINSTITUCIONALES PARA PROGRAMAS DE DOCTORADO",
    description: "Alinear todas las funciones y procesos necesarios para garantizar la ejecución de las estrategias de Mercadeo y Comunicaciones.",
    publicationDate: "12/08/23",
    category: "Formación",
  },
];
