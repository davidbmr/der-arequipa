import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

import imgBanner from "@/public/Home/img1.svg";

import "./CarouselHome.css";
import Image from "next/image";

export default function CarouselHome() {
  const [products, setProducts] = useState([]);
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



  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 6)));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="content__card">
          <Image src={imgBanner} alt="oportunidades" height={"auto"} width={"auto"} />
          <div className="contenido__carousel">
            <h3 style={{ fontSize: "18px" }}>Título de la noticia</h3>
            <p style={{ fontSize: "16px" }}>Descripción de la noticia (Máx se debe mostrar 2 líneas).</p>

            <div className="contenido__carousel__footer">
              <span style={{ fontSize: "14px" }}>Nombre del autor</span>
              <p style={{ fontSize: "14px" }}>24 agosto 2023</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel value={products} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} className="carousel" circular autoplayInterval={5000} />
    </div>
  );
}

const ProductService = {
  getProductsSmall: function () {
    return new Promise((resolve) => {
      const products = [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        
      ];
      resolve(products);
    });
  },
};
