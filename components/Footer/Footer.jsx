import Image from "next/image";
import cellphone from "@/public/Footer/phone.svg";
import mailIcon from "@/public/Footer/mail.svg";
import pointIcon from "@/public/Footer/point.svg";
import logo from "@/public/Footer/logo-purple.svg";
import facebook from "@/public/Footer/facebook.svg";
import twitter from "@/public/Footer/twitter.svg";
import youtube from "@/public/Footer/youtube.svg";
import instagram from "@/public/Footer/instragram.svg";
import linkedin from "@/public/Footer/linkedin.svg";

import styled from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styled.footer}>
      <div className={styled.container_1}>
        <div className={styled.item_1}>
          <Image src={logo} alt="IDEA logo" width={"auto"} height={"auto"} />

          <div className={styled.contact_item}>
            <Image src={mailIcon} alt="mail logo" width={"auto"} height={"auto"} />
            <span> Mail: administracion@idea.com</span>
          </div>

          <div className={styled.contact_item}>
            <Image src={cellphone} alt="phone logo" width={"auto"} height={"auto"} />
            <span> Teléfono: 999544777</span>
          </div>

          <div className={styled.contact_item}>
            <Image src={pointIcon} alt="point logo" width={"auto"} height={"auto"} />
            <span> Ubicación: Arequipa, Perú</span>
          </div>
        </div>

        <ul className={styled.lista__footer}>
          <Link href={"/"}>
            <li>Inicio</li>
          </Link>
          <Link href={"/acerca-de-nosotros"}>
          <li>iDeA</li>
          </Link>
          <Link href={"/ecosistema"}>
          <li>Ecosistema</li>
          </Link>
          <Link href={"/oportunidades"}>
          <li>Oportunidades</li>
          </Link>
          <Link href={"/actualidad"}>
          <li>Actualidad</li>
          </Link>
          <Link href={"/"}>
          <li>Eventos</li>
          </Link>
          <Link href={"/transparencia"}>
          <li>Transparencia</li>
          </Link>
        </ul>
        <hr />
      </div>
      <div className={styled.container_2}>
        <span>© 2023 iDeA. Todos los derechos reservados</span>
        <div className={styled.socials}>
          <Image src={facebook} alt="IDEA logo" width={"auto"} height={"auto"} />

          <Image src={instagram} alt="IDEA logo" width={"auto"} height={"auto"} />
          <Image src={linkedin} alt="IDEA logo" width={"auto"} height={"auto"} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
