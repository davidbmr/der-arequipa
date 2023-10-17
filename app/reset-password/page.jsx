"use client";
import useLayoutStore from "@/store/UseLayoutStore";
import { useEffect, useState } from "react";
import style from "./RestablecerContraseña.module.css";
import useAuthStore from "@/store/AuthState";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import imgLogin from "@/app/(width-nav-footer)/login/assets/fondologin.svg";
import logo from "./assets/lockIcon.svg";
import arrowLeft from "./assets/arrowLeft.svg";
import keyIcon from "@/public/keyIcon.svg";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [RecoveryPassword, setRecoveryPassword] = useState(false);
  const authStore = useAuthStore();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const toggleLayout = useLayoutStore((state) => state.toggleLayout);

  useEffect(() => {
    toggleLayout();

    return () => {
      toggleLayout();
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const isValidPassword = (value) => {
    if (value.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
  
    if (!/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      return "La contraseña debe tener al menos un carácter especial";
    }
  
    return true;
  };
  
  const passwordsMatch = (value) => {
    if (value !== getValues("password")) {
      return "Las contraseñas no coinciden";
    }
    return true;
  };
  return (
    <div className={style.container__login}>
      <div className={`${style.img__login} ${showRegister ? style.moveLeft : style.moveRigth}`}>
        <Image src={imgLogin} alt="Login" width={"auto"} height={"auto"} />
      </div>

      <div className={`${style.contenedor} ${showRegister ? style.moveRight : style.moveRigth}`}>
        <div className={style.formulario} style={{ width: showRegister ? "90%" : "50%" }}>
          <div className={style.form__header}>
            <Image src={logo} alt="logo" className={style.logo} />

            <>
              <p className={style.header__title}>Establecer nueva contraseña</p>
              <span>La nueva contraseña debe ser diferente de la utilizada anteriormente.</span>
            </>
          </div>

          <div className={style.form__container}>
          <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.box__inputs}>
        <div className={style.form__inputs}>
          <span>Contraseña</span>
          <input 
          autoComplete="off"
            type="password" 
            name="password" 
            {...register("password", { 
              required: "La contraseña es requerida", 
              validate: isValidPassword 
            })} 
          />
          {errors.password && <div className={style.error}>{errors.password.message}</div>}
        </div>
        <div className={style.form__inputs}>
          <span>Confirmar Contraseña</span>
          <input 
            type="password" 
            name="confirmPassword"

            {...register("confirmPassword", { 
              required: "Por favor confirme la contraseña", 
              validate: passwordsMatch
            })} 
          />
          {errors.confirmPassword && <div className={style.error}>{errors.confirmPassword.message}</div>}
        </div>
      </div>

      

              <div className={style.btn__action}>
                <button type="submit">Inicia</button>
              </div>
            </form>
          </div>

          <Link href="/login" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".8px" }}>
          <Image src={arrowLeft} alt="arrow" width={"auto"} height={"auto"}/>
            <p className={style.noAcount}>Regresar a Iniciar sesión</p>
          </Link>
        </div>
        <div className={style.copyrigth}>
          <span>© iDeA 2023</span>
        </div>
      </div>
    </div>
  );
};

export default page;
