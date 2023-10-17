"use client";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import style from "./InputSelect.module.css"

export default function InputSelect({ data, inputValue, setInputValue }) {
  return (
    <div className={style.input__style}>
      <Dropdown value={inputValue} onChange={(e) => setInputValue(e.value)} options={data} optionLabel="name" placeholder="Idioma" style={{ width: "max-content", minWidth: "100px" }} />
    </div>
  );
}
