import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

import imgBanner from "@/public/Home/img1.svg";

import "./CarouselHome.css";
import Image from "next/image";
import api, { baseURL } from "@/connections/mainApi";
import formatDate from "@/helper/formateDate";
import { useRouter } from "next/navigation";

export default function CarouselHome() {
  const [products, setProducts] = useState([]);
  const [noticiasData, setNoticiasData] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const router = useRouter();
  

  const fetchData = () => {
    const url = `/api/noticia/recomendados/1`;
    api
      .get(url)
      .then((res) => {
        setNoticiasData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productTemplate = (product) => {
    const handleNoticeClick = () => {
      router.push(`/actualidad/${product.id_noticia}`);
    };


  
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="content__card" onClick={handleNoticeClick}>
          <Image src={`${baseURL}/api/download/${product.imagen}`} alt="oportunidades" height={"210"} width={"250"} />
          <div className="contenido__carousel">
            <h3 style={{ fontSize: "18px" }}>{product.titulo}</h3>
            <p style={{ fontSize: "16px" }}>
              {product.introduccion.split(" ").slice(0, 7).join(" ")}
              {product.introduccion.split(" ").length > 7 ? " ..." : ""}
            </p>
  
            <div className="contenido__carousel__footer">
              <p style={{ fontSize: "14px" }}>{formatDate(product.created_at)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="card">
      <Carousel value={noticiasData} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className="carousel" circular autoplayInterval={5000} />
    </div>
  );
}
