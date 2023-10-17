"use client"
import React from 'react'

import style from "./PublicacionesPendientes.module.css"
import DataTableForm from '@/PrimeComponents/DataTableForm/DataTableForm'

const PublicacionesPendientes = () => {


    const ColumnNameDataTable = [
        {
          NameColumn: "Titulo",
          NameFilter: "titulo",
          BodyColumn: (rowData) => {
            return <>{rowData.titulo}</>;
          },
          StyleWidthColumn: 10,
        },
        {
          NameColumn: "Empresa",
          NameFilter: "empresa",
          BodyColumn: (rowData) => {
            return <>{rowData.empresa}</>;
          },
          StyleWidthColumn: 10,
        },
        {
          NameColumn: "fechaPublicacion",
          NameFilter: "fechaPublicacion",
          BodyColumn: (rowData) => {
            return <>{rowData.fechaPublicacion}</>;
          },
          StyleWidthColumn: 10,
        },
        {
          NameColumn: "Estado",
          NameFilter: "estado",
          BodyColumn: (rowData) => {
            return <>{rowData.estado}</>;
          },
          StyleWidthColumn: 10,
        },
      
      ];
    
  return (
    
    <div className={style.contenedor__publicaciones}>
        <h2>Mis Publicaciones</h2>
        <DataTableForm ColumnNameDataTable={ColumnNameDataTable} products={data} rows={11}/>
    </div>
    
  )
}

export default PublicacionesPendientes

const data = [
    {
      id: 1,
      titulo: 'Desarrollador Front-end',
      empresa: 'SolucionesTech Inc.',
      descripcion: 'Únete a nuestro equipo dinámico para crear aplicaciones web innovadoras.',
      fechaPublicacion: '2023-09-25',
      estado: 'en revisión'
    },
    {
      id: 2,
      titulo: 'Desarrollador Backend',
      empresa: 'SaludPlus',
      descripcion: 'Trabaja en sistemas backend robustos para nuestra plataforma de salud.',
      fechaPublicacion: '2023-09-30',
      estado: 'aprobada'
    },
    {
      id: 3,
      titulo: 'Diseñador UI/UX',
      empresa: 'DiseñosCreativos SA',
      descripcion: 'Buscamos un diseñador apasionado para mejorar la experiencia de usuario en nuestras soluciones.',
      fechaPublicacion: '2023-10-05',
      estado: 'rechazada'
    },
    {
      id: 4,
      titulo: 'Analista de Datos',
      empresa: 'DataMax Ltda.',
      descripcion: 'Transforma grandes conjuntos de datos en insights accionables para nuestros clientes.',
      fechaPublicacion: '2023-10-07',
      estado: 'en revisión'
    },
   
  ];
  