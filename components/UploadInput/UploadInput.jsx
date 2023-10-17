import React, { useState, useRef } from 'react';
import style from './Upload.module.css'; // Asegúrate de importar tus estilos correctamente
import fileUpload from "../../public/Oportunidades/fileupload.svg";
import Image from 'next/image';

function DocumentUpload({ onDocumentUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onDocumentUpload(file); // Envía el archivo al backend (puedes implementar esta función)
  };

  const handleRemoveDocument = () => {
    setSelectedFile(null);
    onDocumentUpload(null); // Envía null al backend para eliminar el documento (puedes implementar esta función)
  };

  return (
    <div className={style.select__container}>
      <div className={style.upload__container}>
        {selectedFile ? (
          <div className={style.uploadButton}>
            <span>{selectedFile.name}</span>
            <button className={style.removeButton} onClick={handleRemoveDocument}>
              X
            </button>
          </div>
        ) : (
          <div className={style.uploadButton} onClick={handleFileClick}>
            <div className={style.img__upload}>
              <Image src={fileUpload} alt="agregarIcon" width={"auto"} height={"auto"} />
            </div>
            <p>
              <span>Haga clic para cargar</span> o arrastrar y soltar
            </p>
            <span>SVG, PNG, JPG (max. 800x400px)</span>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          accept=".svg, .png, .jpg"
          className={style.hiddenInput}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default DocumentUpload;
