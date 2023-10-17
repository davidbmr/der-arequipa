"use client";

import logo_idea from "@/public/logo-idea-color.svg";
import logo_innova from "@/public/logo-innova-color.svg";
import personIcon from "@/public/personIcon.svg";
import burguerIcon from "@/public/menuHamburguesa.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "./Navbar.module.css";
import InputSelect from "@/PrimeComponents/InputSelect";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/AuthState";

const Routes = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "iDeA",
    path: "/acerca-de-nosotros",
  },
  {
    label: "Ecosistema",
    path: "/ecosistema",
  },
  {
    label: "Oportunidades",
    path: "/oportunidades",
  },
  {
    label: "Actualidad",
    path: "/actualidad",
  },
  {
    label: "Eventos",
    path: "/eventos",
  },
  {
    label: "Transparencia",
    path: "/transparencia",
  },
];

const idiomas = [
  { name: "ESP", code: "NY" },

  { name: "ENG", code: "LDN" },
];

function NavBar() {
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState("NY");
  const [login, setLogin] = useState(false);
  const { user, setUser } = useAuthStore();
  const [menuActive, setMenuActive] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("dearArequipa__token");
    if (token) {
      setLogin(true);
    }
  }, []);

  const isActiveRoute = (route) => {
    return pathname === route;
  };

  const getNavLinkClassName = (route) => {
    return isActiveRoute(route) ? styled.item_nav_active : styled.item_nav;
  };

  const handleLogout = () => {
    localStorage.removeItem("dearArequipa__token");
    setUser(null);
    setLogin(false);
  };

  return (
    <div className={styled.header_container}>
      <div className={styled.sub_header}>
        <Image src={logo_idea} alt="Idea" height={"auto"} width={"auto"} />
        <Image src={logo_innova} alt="Innova Arequipa" height={"auto"} width={"auto"} className={styled.innova__logo} />
        <Image src={burguerIcon} alt="Innova Arequipa" height={"auto"} width={"auto"} onClick={() => setMenuMobile(!menuMobile)}/>
       
      </div>

      <div className={styled.container__nav}>
        <nav className={`${styled.nav} ${menuMobile ? styled.active : ""}`}>
          <span className={styled.close__menu} onClick={() => setMenuMobile(false)}>X</span>
          <ul>
            {Routes.map((el, index) => (
              <Link href={el.path} key={index} className={getNavLinkClassName(el.path)} onClick={() => setMenuMobile(false)}>
                {" "}
                {el.label}{" "}
              </Link>
            ))}
          </ul>
        </nav>
        <div className={styled.btn__navbar}>
          <InputSelect data={idiomas} inputValue={inputValue} setInputValue={setInputValue} className={styled.inputSelectStyle} />
          <div className={styled.nav_lang_login_btn}>
            {!login ? (
              <Link href="/login" className={styled.sesion}>
                INICIAR SESIÓN
              </Link>
            ) : (
              <div className={styled.personIcon}>
                <div style={{ position: "relative" }}>
                  <div className={styled.mainHeader__profile} onClick={() => setMenuActive((prev) => !prev)}>
                    <div className={styled.avatar__container}>
                      <Image src={personIcon} alt="person" height={"auto"} width={"auto"} />
                    </div>
                    {menuActive && (
                      <div className={styled.profileMenu}>
                        <ul className={styled.profileMenu__list}>
                          <Link href={"perfil-usuario"}>
                            <li className={styled.profileMenu__item}>Perfil</li>
                          </Link>
                          <Link href={"publicaciones-pendientes"}>
                            <li className={styled.profileMenu__item}>Publicaciones</li>
                          </Link>
                          <Link href={"/"}>
                          <li className={styled.profileMenu__item} onClick={handleLogout}>Cerrar Sesión</li>
                          </Link>
                         
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
