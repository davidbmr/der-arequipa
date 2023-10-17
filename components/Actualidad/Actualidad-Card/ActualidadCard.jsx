import Image from "next/image";
import Link from "next/link"; // Importa el componente Link de Next.js
import styled from "./ActualidadCard.module.css";
import img from '@/public/Actualidad/actualidad.svg'
import arrow from '@/public/Actualidad/arrow.svg'
import formatDate from "@/helper/formateDate";

function ActualidadCard({ id_noticia, introduccion, created_at,titulo}) {

  const words = introduccion.split(' ');

 
  const truncatedIntroduccion = words.slice(0, 5).join(' ');


  const truncatedText = `${truncatedIntroduccion}...`;

  return (
    <div className={styled.container_card}>
     <div className={styled.container_img}>
    <Image src={img} alt={titulo} layout="fill" objectFit="cover" />
    <div className={styled.container_img_text}>
        <h5>{titulo}</h5>
        <p>{formatDate(created_at)}</p>
    </div>
</div>


      <h2 className={styled.title}>{truncatedText}</h2>
      <Link href={`/actualidad/${id_noticia}`} className={styled.link}>
          Leer noticia{" "}
          <Image src={arrow} alt="IDEA ARROW" width={18} height={18} />
   
      </Link>
    </div>
  );
}

export default ActualidadCard;
