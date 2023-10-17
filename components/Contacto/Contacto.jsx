"use client"

import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useState } from "react";
import styled from './Contacto.module.css'

function Contacto() {
  const [value, setValue] = useState('');

  return (
    <div className={styled.container_1}>
      <h3 className={styled.title_1}> CONÉCTATE CON RUTA N </h3>
      <p className={styled.sub_title}> Suscríbete para mantenerte actualizado o actualizada con nuestras últimas noticias </p>
      <div className={styled.container_2}>
        <InputText className={styled.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Nombre"/>
        <InputText className={styled.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Email"/>
        <button className={styled.button}> Suscribirse </button>
      </div>
    </div>
  );
}

export default Contacto;