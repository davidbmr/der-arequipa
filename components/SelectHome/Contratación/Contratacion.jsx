import Image from "next/image";
import contratacion from '@/public/SelectHome/contratacion.png'
import styled from './Contratacion.module.css'

function Contratacion() {
  return (
    <div className={styled.container__1}>
      <Image src={contratacion} height={"auto"} width={"auto"} alt="Contratación IDEA" />

      <div className={styled.text_container}>
        <h1>_______, la empresa tech que promete 100 vacantes de empleo de calidad, acaba de aterrizar en __________</h1>
        <p>
          Esta compañía es líder en procesos robóticos y en servicios de inteligencia artificial en EE. UU. Ya cuenta con 75 ingenieros y promete pr...
        </p>
        <button > Leer noticia</button>
      </div>
      
    </div>
  );
}

export default Contratacion;