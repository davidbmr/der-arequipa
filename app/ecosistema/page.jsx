import React from "react";
import style from "./Ecosistema.module.css";

import PDFIcon from "../../public/Ecosistema/pdfIcon.svg";
import xlsIcon from "../../public/Ecosistema/xlsIcon.svg";
import Image from "next/image";
import DocumentDownload from "@/components/DocumentoDownload/DocumentDownload";

import crl1 from "../../public/Ecosistema/CRL/CRL1.svg";
import crl2 from "../../public/Ecosistema/CRL/CRL2.svg";
import crl3 from "../../public/Ecosistema/CRL/CRL3.svg";
import crl4 from "../../public/Ecosistema/CRL/CRL4.svg";
import crl5 from "../../public/Ecosistema/CRL/CRL5.svg";
import crl6 from "../../public/Ecosistema/CRL/CRL6.svg";
import crl7 from "../../public/Ecosistema/CRL/CRL7.svg";
import crl8 from "../../public/Ecosistema/CRL/CRL8.svg";
import crl9 from "../../public/Ecosistema/CRL/CRL9.svg";

const Ecosistema = () => {
  return (
    <div className={style.ecosistema__container}>
      <h2>Niveles de maduración tecnológica</h2>

     <div className={style.banner}></div>

      <div className={style.contenedor__parrafo1}>
        <h3>Calcular el nivel de Madurez Tecnológica (TRL).</h3>
        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </p>
        <br />
        <p>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.{" "}
        </p>

        <div className={style.recorrido__container}>
          <div className={style.contain__item__gris}>
            <h4>Investigación básica</h4>
            <div className={style.border__white}>
              <span>TRL 3</span>
            </div>
          </div>

          <div className={style.contain__item__gris}>
            <h4>Investigación básica</h4>
            <div className={style.item__gris__group}>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
            </div>
          </div>

          <div className={style.contain__item__gris}>
            <h4>Investigación básica</h4>
            <div className={style.item__gris__group}>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
            </div>
          </div>

          <div className={style.contain__item__gris}>
            <h4>Investigación básica</h4>
            <div className={style.item__gris__group}>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
              <div className={style.border__white}>
                <span>TRL 3</span>
              </div>
            </div>
          </div>
        </div>

        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </p>
        <br />
        <p>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.{" "}
        </p>

        <div className={style.document__download__container}>
          <div className={style.document__box}>
            <div style={{ display: "flex", gap: ".8rem" }}>
              <Image
                src={PDFIcon}
                alt="banner"
                width={"auto"}
                height={"auto"}
                className={style.documentIcon}
              />
              <div>
                <p>Nombre documento.pdf</p>
                <span>200 KB</span>
              </div>
            </div>
            <button className={style.btn__descargar}>Descargar</button>
          </div>

          <div className={style.document__box}>
            <div style={{ display: "flex", gap: ".8rem" }}>
              <Image
                src={xlsIcon}
                alt="banner"
                width={"auto"}
                height={"auto"}
                className={style.documentIcon}
              />
              <div>
                <p>Nombre documento.pdf</p>
                <span>200 KB</span>
              </div>
            </div>
            <button className={style.btn__descargar}>Descargar</button>
          </div>
        </div>

        <h3>Nivel de Madurez Comercial (CRL).</h3>

        <p>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in
          volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
          arcu quis fusce augue enim. Quis at habitant diam at. Suscipit
          tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
          molestie aliquet sodales id est ac volutpat.
        </p>

        <div className={style.crl__container__img}>
          <Image src={crl1} alt="crl1" width={"auto"} height={"auto"} />
          <Image src={crl2} alt="crl2" width={"auto"} height={"auto"} />
          <Image src={crl3} alt="crl3" width={"auto"} height={"auto"} />
          <Image src={crl4} alt="crl4" width={"auto"} height={"auto"} />
          <Image src={crl5} alt="crl5" width={"auto"} height={"auto"} />
          <Image src={crl6} alt="crl6" width={"auto"} height={"auto"} />
          <Image src={crl7} alt="crl7" width={"auto"} height={"auto"} />
          <Image src={crl8} alt="crl8" width={"auto"} height={"auto"} />
          <Image src={crl9} alt="crl9" width={"auto"} height={"auto"} />
        </div>

        <div className={style.document__download__container}>
          <div className={style.document__box}>
            <div style={{ display: "flex", gap: ".8rem" }}>
              <Image
                src={PDFIcon}
                alt="banner"
                width={"auto"}
                height={"auto"}
                className={style.documentIcon}
              />
              <div>
                <p>Nombre documento.pdf</p>
                <span>200 KB</span>
              </div>
            </div>
            <button className={style.btn__descargar}>Descargar</button>
          </div>

          <div className={style.document__box}>
            <div style={{ display: "flex", gap: ".8rem" }}>
              <Image
                src={xlsIcon}
                alt="banner"
                width={"auto"}
                height={"auto"}
                className={style.documentIcon}
              />
              <div>
                <p>Nombre documento.pdf</p>
                <span>200 KB</span>
              </div>
            </div>
            <button className={style.btn__descargar}>Descargar</button>
          </div>
        </div>
        <h3>Calculadora de Nivel de Madurez </h3>

        <p>
          Respecto a la propuesta TRL – CONCYTEC: Realizar un proceso de
          transferencia tecnológica conlleva costos y riesgos en función al tipo
          de producto o servicio que se desea transferir. Para minimizar el
          riesgo en el proceso de transferencia de tecnología y reconocer que el
          desarrollo desde la investigación básica hasta un producto, proceso o
          servicio en el mercado, tiene muchas etapas es que se ha decido
          adoptar, la herramienta de categorización del Nivel de Madurez
          Tecnológica o Technology Readiness Level (TRL) cuya finalidad es
          clasificar una tecnología en relación a su estado y grado de
          desarrollo, haciendo más fácil comunicar en qué estado se encuentra y
          cuánto le falta para llegar a entrar al mercado. Los TLR se componen
          de 9 niveles; TRL 1 como nivel más básico hasta TRL 9 nivel más
          desarrollado y validado para iniciar actividades comerciales. De
          acuerdo al Manual de Frascati (2015) el TRL describe los niveles de
          manera clara y es versátil para posicionar el estado de desarrollo de
          la tecnología o proyecto de I+D, sin embargo, para esa fecha aún no lo
          adopta como una definición universal. Del mismo modo para el
          desarrollo de la presente herramienta de cálculo o calculadora toma
          como referencia lo desarrollado por NYSERDA ( Autoridad de
          Investigación y Desarrollo de Energía del Estado de Nueva York ) y los
          niveles de madurez tecnológica o TRL adaptado de la NASA.
          Adicionalmente la presente calculadora cuenta con un criterio
          complementario no obligatorio sobre el aspecto de comercialización CRL
          para iniciativas que tengan un nivel de TRL elevado (mayor de TRL 7 u
          8).
        </p>

        <div className={style.calculadora__container}>
            <div className={style.calculadora__container__content}>
              <h2>Conoce el nivel de madurez de tu proyecto</h2>
              <p>Si tienes dudas sobre el nivel de madurez tecnológica y comercial de tu proyecto, utiliza esta calculadora la cual te permitirá identifica el TRL, CRL o ambos para tu proyecto.</p>
            </div>
            <button>Ir a la calculadora</button>

        </div>
      </div>
    </div>
  );
};

export default Ecosistema;
