import style from "./IDeA.module.css";
import featuresicon from "../../public/IDeA/featureicon.svg";
import zapfastIcon from "../../public/IDeA/Zapfast.svg";
import zapfastIcon2 from "../../public/IDeA/zapIcon2.svg";
import chartIcon from "../../public/IDeA/charticon.svg";
import chartIcon2 from "../../public/IDeA/chartIcon2.svg";
import messageIcon from "../../public/IDeA/messageChaticon.svg";
import smileIcon from "../../public/IDeA/smileIcon.svg";
import Image from "next/image";
import checkIcon from "../../public/IDeA/check.svg";
import img1 from "../../public/IDeA/img1.svg";
import img2 from "../../public/IDeA/img2.svg";
import imgManuel from "../../public/IDeA/imgManuel.svg";
import imgLuis from "../../public/IDeA/imgLuis.svg";
import imgJose from "../../public/IDeA/imgJose.svg";

const IDeA = () => {
  return (
    <div className={style.ideA__contenedor}>
      <h2>Estrategia para la formación y desarrollo de una cultura I+D+i+e, en el ecosistema regional Arequipa</h2>
      <div className={style.cards__container_all}>
        <div className={style.card__container}>
          <div className={style.check__items__card}>
            <div className={style.featureicon}>
              <Image src={featuresicon} alt="feature" width={"auto"} height={"auto"} />
            </div>
            <h3>Antecedentes</h3>
            <ul id="list">
              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>
                  El Proyecto de Dinamización de Ecosistemas Regionales de Innovación y Emprendimiento financiado por Proinnovate es ejecutado por el Proyecto Especial COPASA en su primera etapa y la
                  Universidad Católica de Santa María en su segunda etapa.{" "}
                </p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>Una de las áreas prioritarias del proyecto fue la creación de un Hub de conocimiento, emprendimiento e innovación tecnológica.</p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>Surge así la estrategia para la formación y desarrollo de una cultura I+D+i+e en el ecosistema regional Arequipa.</p>
              </li>
            </ul>
          </div>
          <Image src={img1} alt="img" width={"auto"} height={"auto"} className={style.img__1} />
        </div>

        <div className={style.card__container}>
          <div className={style.check__items__card}>
            <div className={style.featureicon}>
              <Image src={zapfastIcon} alt="feature" width={"auto"} height={"auto"} />
            </div>
            <h3>Objetivos Hub</h3>
            <ul id="list">
              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>Articular las capacidades de instituciones, organizaciones y/o empresas, para generar condiciones favorables e interrelación entre los actores del ecosistema.</p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>Apoyar el desarrollo de emprendimientos de impacto, para que puedan implementarse en la región y llegar a un nivel de madurez competitivo en su mercado.</p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>Finalmente generar una cultura de innovación que sea tractora de emprendedores, startups, grupos de investigación y empresas innovadoras.</p>
              </li>
            </ul>
          </div>
          <Image src={img2} alt="img" width={"auto"} height={"auto"} className={style.img__1} />
        </div>

        <div className={style.card__container}>
          <div className={style.check__items__card}>
            <div className={style.featureicon}>
              <Image src={chartIcon} alt="feature" width={"auto"} height={"auto"} />
            </div>
            <h3>El Hub bajo la marca iDeA</h3>
            <ul id="list">
              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>El Hub actualmente opera bajo la marca iDeA.</p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>iDeA se convierte en una plataforma virtual que brinda información, recursos y servicios a los actores del ecosistema de innovación y emprendimiento de Arequipa.</p>
              </li>

              <li>
                <Image src={checkIcon} alt="check" width={"auto"} height={"auto"} />
                <p>iDeA también organiza eventos, talleres y capacitaciones para promover la innovación y el emprendimiento en la región.</p>
              </li>
            </ul>
          </div>
          <Image src={img1} alt="img" width={"auto"} height={"auto"} className={style.img__1} />
        </div>
      </div>

      {/* ///////////////////////FEATURES////////////////////////// */}

      <div className={style.features__container}>
        <div className={style.features__header}>
          <h2>¿Cómo puede ayudarte iDeA?</h2>
          <p>iDeA puede ayudarte a desarrollar y escalar tu negocio de diversas maneras, incluyendo:</p>
        </div>
        <div className={style.items__container}>
          <div className={style.features__item}>
            <div className={style.featureIcons}>
              <Image src={messageIcon} alt="chatIcon" width={"auto"} height={"auto"} />
            </div>
            <p>Brindándote acceso a información y recursos sobre innovación y emprendimiento.</p>
          </div>

          <div className={style.features__item}>
            <div className={style.featureIcons}>
              <Image src={zapfastIcon2} alt="chatIcon" width={"auto"} height={"auto"} />
            </div>
            <p>Conectándote con otros actores del ecosistema de innovación y emprendimiento</p>
          </div>

          <div className={style.features__item}>
            <div className={style.featureIcons}>
              <Image src={chartIcon2} alt="chatIcon" width={"auto"} height={"auto"} />
            </div>
            <p>Ofreciéndote oportunidades de capacitación y desarrollo.</p>
          </div>

          <div className={style.features__item}>
            <div className={style.featureIcons}>
              <Image src={smileIcon} alt="chatIcon" width={"auto"} height={"auto"} />
            </div>
            <p>Apoyándote en la búsqueda de financiación y oportunidades de mercado.</p>
          </div>
        </div>
      </div>

      {/* ////////////////////////TEAM SECTION///////////////////////////// */}

      <div className={style.team__section}>
        <div className={style.team__container}>
          <div className={style.team__header}>
            <h2>Equipo técnico</h2>
            <p>Somos un equipo multidisciplinario en el cual nos enfocamos en el logro me metas colectivas.</p>
          </div>

          <div className={style.team__card__container}>
            <div className={style.item3__card}>
              <div className={style.item__card_team}>
                <Image src={imgManuel} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>

              <div className={style.item__card_team}>
                <Image src={imgLuis} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>

              <div className={style.item__card_team}>
                <Image src={imgJose} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>
            </div>

            <div className={style.item3__card}>
              <div className={style.item__card_team}>
                <Image src={imgManuel} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>

              <div className={style.item__card_team}>
                <Image src={imgManuel} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>

              <div className={style.item__card_team}>
                <Image src={imgManuel} alt="manuel" width={"auto"} height={"auto"} />
                <div className={style.item__text}>
                  <h4>Manuel Eduardo Loaiza Fernandez</h4>
                  <span>Líder del Proyecto iDeA</span>
                  <span className={style.role}>Phd en Informática</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDeA;
