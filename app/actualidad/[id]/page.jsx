"use client";
import React, { useEffect, useState } from "react";

import style from "../Actualidad.module.css";

import IDEA from "@/public/Actualidad/actualidad.svg";
import arrow from "@/public/Actualidad/arrow.svg";
import IMG1 from "../../../public/Actualidad/actualidadIMG.svg";
import copyIcon from "../../../public/Actualidad/copyIcon.svg";
import facebookIcon from "../../../public/Actualidad/facebookicon.svg";
import instagramIcon from "../../../public/Actualidad/instagramIcon.svg";
import Image from "next/image";
import Actualidad from "@/components/Actualidad/Actualidad";
import ActualidadCard from "@/components/Actualidad/Actualidad-Card/ActualidadCard";
import Link from "next/link";
import api from "@/connections/mainApi";

const page = ({ params }) => {
  const [data, setData] = useState([]);
  const [noticiasData, setNoticiasData] = useState([]);
  const lastTwoNews = noticiasData.slice(-2);
  const { id } = params;

  const fetchDataNoticias = () => {
    const url = `/api/noticia/recomendados/${id}`;
    api
      .get(url)
      .then((res) => {
        setNoticiasData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchData = () => {
    const url = `/api/noticia/${id}`;

    api
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    fetchDataNoticias();
  }, []);

  return (
    <div className={style.actualidad__container}>
      <div className={style.header__container}>
        <div className={style.header__title}>
          <div className={style.title__group}>
            <span>03 ene. 2023 • 10 min de lectura</span>
            <p>{data.titulo}</p>
          </div>
        </div>

        <Image src={IMG1} alt="img" width={"auto"} height={"auto"} />
      </div>

      <div className={style.container__de__contenido}>
        <div className={style.content__container}>
          <h2>Introducción</h2>

          <p>{data.introduccion}</p>

          <div className={style.img__banner}></div>

          <p>{data.cuerpo}</p>
          <hr />
          <div className={style.social__container}>
            <span>Compartir noticia</span>

            <div className={style.social}>
              <button>
                {" "}
                <Image src={copyIcon} alt="img" width={"auto"} height={"auto"} /> Copiar enlace
              </button>
              <button>
                <Image src={facebookIcon} alt="img" width={"auto"} height={"auto"} />
              </button>
              <button>
                {" "}
                <Image src={instagramIcon} alt="img" width={"auto"} height={"auto"} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.post__container}>
        <div className={style.header__ultimos__post}>
          <div className={style.header__ultimo__post__title}>
            <span>Noticias</span>
            <h2>Nuestros últimos posts</h2>
            <p>Entérate de todas nuestras novedades.</p>
          </div>

          <Link href={"/actualidad"} className={style.btn__ver}>
            <button>Ver Todos</button>
          </Link>
        </div>
        <div className={style.actualidad__post__items}>
          {lastTwoNews.map((news) => (
            <ActualidadCard key={news.id_noticia} introduccion={news.introduccion} created_at={news.created_at} titulo={news.titulo} id_noticia={news.id_noticia} imagen={news.imagen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
