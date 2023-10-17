'use client'
import React, { useEffect, useState } from "react";
import styled from "./Actualidad.module.css";
import Select from "./Select";
import ActualidadCard from "./Actualidad-Card/ActualidadCard";
import IDEA from "@/public/Actualidad/actualidad.svg";
import arrow from "@/public/Actualidad/arrow.svg";
import api from "@/connections/mainApi";
import { Paginator } from 'primereact/paginator';

const cardData = [
  {
    id: 1,
    category: "Negocios",
    date: "03 ene. 2023",
    title: "iDeA presenta su plan operativo frente al gran grupo impulsor y asociado.",
    image: IDEA,
    arrowImage: arrow,
  },
];

function Actualidad() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const fetchData = () => {
    const url = `/api/noticia`;
    api.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <div className={styled.main_container}>
      <div className={styled.container_text}>
        <p>Blog</p>
        <h3>Últimas noticias</h3>
      </div>
      <div className={styled.select__container}>
        <Select />
      </div>
      <div className={styled.example}>
        {currentCards && currentCards.map((card) => (
          <ActualidadCard key={card.id} {...card} />
        ))}
      </div>
      <hr />
      <Paginator 
    totalRecords={data.length} 
    rows={cardsPerPage} 
    onPageChange={(e) => setCurrentPage(e.page + 1)} 
    first={indexOfFirstCard} 
    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
/>


    
    </div>
  );
}

export default Actualidad;
