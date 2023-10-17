import React from "react";
import { Calendar } from "primereact/calendar";
import style from "./PrimeCalendar.module.css";
import { addLocale, locale } from "primereact/api";
import 'primereact/resources/primereact.min.css'; 

const InputCalendar = ({ value, onChange, textLabel, width = "100%" }) => {
  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });

  locale("es");

  return (
    <div className={style.column__item} style={{ width }}>
      <label>{textLabel}</label>
      <Calendar value={value} onChange={onChange} showIcon locale="es" />
    </div>
  );
};

export default InputCalendar;
