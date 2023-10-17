"use client"

import { useState } from 'react';
import styled from './SelectHome.module.css'
import Contratacion from './Contratación/Contratacion';


function SelectHome() {
  const [seleccion, setSeleccion] = useState(`contratacion`);

  
  const handleChecked = ( seleccion ) => {
    setSeleccion( seleccion )
  }

  return (
    <div className={styled.select__home__container}>

      <h3 className={styled.title__select__home}>NUEVAS OPORTUNIDADES</h3>
      <div className={styled.continaer__boxes__select__home}>

        <div className={styled.item__field__select}>
          <input type="checkbox" id='contratacion' checked={ seleccion === "contratacion"}
           onChange={ (e) => handleChecked( 'contratacion' ) }
          />
          <label htmlFor="contratacion">CONTRATACIÓN</label>
        </div>

        <div className={styled.item__field__select}>
          <input type="checkbox" id='innovacion' 
          checked={ seleccion === "innovacion" }
          onChange={ (e) => handleChecked( 'innovacion' ) }/>
          <label htmlFor="innovacion">INNOVACIÓN</label>
        </div>

        <div className={styled.item__field__select}>
          <input type="checkbox" id='formacion'
           checked={ seleccion === "formacion" }
           onChange={ (e) => handleChecked( 'formacion' ) } />
          <label htmlFor="formacion">FORMACIÓN</label>
        </div>

        <div className={styled.item__field__select}>
          <input type="checkbox" id='inversion' 
          checked={ seleccion === "inversion" } 
          onChange={ (e) => handleChecked( 'inversion' ) }/>
          <label htmlFor="inversion">INVERSIÓN</label>
        </div>
      </div>

      <div className={styled.container__selected__boxes}>
        {seleccion === 'contratacion' && <Contratacion />}
        {seleccion === 'inversion' && <Contratacion />}

      </div>

    </div>
  );
}

export default SelectHome;