import React from 'react'
import style from "./Transparencia.module.css"

const Transparencia = () => {
  return (
    <div className={style.transparencia__container}>
      <h2>En iDeA trabajamos con experiencia</h2>
      <p>Visualiza nuestra información y forma de trabajar.</p>
      <div className={style.box__container}>
        <div className={style.box}>
          <h3>1.Título</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas auctor magna gravida penatibus eu.</p>
        </div>
        <div className={style.box}>
          <h3>1.Título</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas auctor magna gravida penatibus eu.</p>
        </div>
        <div className={style.box}>
          <h3>1.Título</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas auctor magna gravida penatibus eu.</p>
        </div>
      </div>
    </div>
  )
}

export default Transparencia