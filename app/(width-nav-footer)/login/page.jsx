"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA component

import style from "./login.module.css";
import Image from "next/image";
import imgLogin from "./assets/fondologin.svg";
import logo from "./assets/logoDear.svg";
import arrowLeft from "@/app/reset-password/assets/arrowLeft.svg";

import keyIcon from "@/public/keyIcon.svg";
import iconGoogle from "./assets/iconGoogle.svg";
import Register from "@/components/Register/Register";
import Link from "next/link";
import useAuthStore from "@/store/AuthState";
import api from "@/connections/mainApi";
import SimpleLayout from "../layout";
import useLayoutStore from "@/store/UseLayoutStore";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import RecoveryPasswordComponent from "./components/RecoveryPassword/RecoveryPassword";

const ContenedorLogin = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [RecoveryPassword, setRecoveryPassword] = useState(false);
  const authStore = useAuthStore();
  const {
    register,
    handleSubmit,
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
    // Muestra el toast de "Cargando" y guarda su ID
    const toastId = toast("Cargando...", { autoClose: false });

    try {
      const response = await api.post(`/api/login`, data);

      // Cierra el toast de "Cargando" una vez que la petición haya finalizado
      toast.dismiss(toastId);

      if (response.status === 200) {
        const user = response.data;
        if (user.token) {
          localStorage.setItem("dearArequipa__token", user.token);
          router.push("/");
          toast.success("Iniciado con éxito!"); // Notificación toast para éxito
        }

        authStore.setUser(user);
        console.log("Usuario logueado:", user);
      } else {
        console.error("Error al iniciar sesión");
        toast.error("Error al iniciar sesión"); // Notificación toast para error
      }
    } catch (error) {
      // Cierra el toast de "Cargando" en caso de un error
      toast.dismiss(toastId);

      console.error("Error:", error);
      toast.error("Ocurrio un error al iniciar sesión, intentalo de nuevo"); // Notificación toast para error
    }
  };

  return (
    <div className={style.container__login}>
      <div className={`${style.img__login} ${showRegister ? style.moveLeft : style.moveRigth}`}>
        <Image src={imgLogin} alt="Login" width={"auto"} height={"auto"} />
      </div>

      <div className={`${style.contenedor} ${showRegister ? style.moveRight : style.moveRigth}`}>
        <div className={style.formulario} style={{ width: showRegister ? "90%" : "50%" }}>
          <div className={style.form__header}>
            {RecoveryPassword ? (
              <div className={style.keyIcon}>
                <Image src={keyIcon} alt="logo" className={style.key__icon__img} />
              </div>
            ) : (
              <Image src={logo} alt="logo" className={style.logo} />
            )}
            {RecoveryPassword ? (
              <>
                <p className={style.header__title}>Recuperar contraseña</p>
                <span>No te preocupes, te enviaremos instrucciones para restablecerlo.</span>
              </>
            ) : (
              <>
                <p className={style.header__title}>{showRegister ? "Registrarse" : "Iniciar sesión"}</p>
                <span>{showRegister ? "Crea una cuenta" : "Bienvenido, ingresa tus datos"}</span>
              </>
            )}
          </div>

          <div className={style.form__container}>
            {RecoveryPassword ? (
              // Vista para recuperar contraseña
              <RecoveryPasswordComponent />
            ) : // Formulario de inicio de sesión normal o registro
            showRegister ? (
              <Register />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.box__inputs}>
                  <div className={style.form__inputs}>
                    <span>Email</span>
                    <input type="email" name="email" {...register("email", { required: "Email is required" })} />
                    {errors.email && <div className={style.error}>{errors.email.message}</div>}
                  </div>

                  <div className={style.form__inputs}>
                    <span>Contraseña</span>
                    <input type="password" name="password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <div className={style.error}>{errors.password.message}</div>}
                  </div>
                </div>

                <ReCAPTCHA className={style.recaptcha} sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={(value) => console.log("reCAPTCHA value:", value)} />

                <div className={style.olvide__password} onClick={() => setRecoveryPassword(true)}>
                  Olvidé mi contraseña
                </div>

                <div className={style.btn__action}>
                  <button type="submit">Inicia</button>

                  {/* <button>
                    <Image src={iconGoogle} alt="icon" width={"auto"} height={"auto"} />
                    Inicia sesión con Google
                  </button> */}
                </div>
              </form>
            )}
          </div>

          {!RecoveryPassword && (
            <p className={style.noAcount}>
              {showRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
              <span className={style.register} onClick={() => setShowRegister(!showRegister)}>
                {showRegister ? "Iniciar sesión" : "Regístrate"}
              </span>
            </p>
          )}
          {RecoveryPassword && (
            <div className={style.volver__atras} onClick={() => setRecoveryPassword(false)}>
              <Image src={arrowLeft} alt="arrow" width={"auto"} height={"auto"} />
              <p className={style.noAcount}>Regresar a Iniciar sesión</p>
            </div>
          )}
        </div>
        <div className={style.copyrigth}>
          <span>© iDeA 2023</span>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  );
};

export default ContenedorLogin;
