import React from 'react'
import { Hero } from '../../components/hero';
import styles from "./brand.module.scss";
import brandSection3Img from "../../assets/img/brand_section3_img.png";
import brandSection4Img from "../../assets/img/brand_section4_img.png";

export const Brand = () => {
  return (
    <section >
      <div className={styles.brand}>
        <Hero
          title="About hero ONmacabim"
          text="Place where our crazy-talented master stylists will not only do a haircut or makeup." />
      </div>

      <div className='container'>
        <div className={styles.brand_section2}>
          <h1 className={styles.brand_section2_title}>
            ONmacabim. Made in Israel with LOVE
          </h1>
          <p>
            ONmacabim ist ein führender Hersteller von kosmezeutischen Hautpflegeprodukten in Israel. <br /> <br />

            Seit dem Jahr 2000 verwaltet das Unternehmen den gesamten Zyklus der Produktentwicklung: Kontrolle des Anbaus von Pflanzen aus der Judäischen Wüste, deren Sammlung und Verarbeitung, Rezepturentwicklung, Tests, Lizenzierung und Produktion mit modernsten Anlagen. <br /> <br />

            Eine der Stärken von ONmacabim ist seine vielfältige Produktpalette, die nahtlos zusammenarbeitet und von Spezialisten kombiniert werden kann, um klinische Ergebnisse zu erzielen. <br /> <br />

            Die Wirkstoffe sind Pflanzenextrakte, die durch geschützte Extraktionsverfahren in hoher Konzentration gewonnen werden. <br /> <br />

            Die Formulierungen der kosmetischen Mittel enthalten keine Mineralöle, künstlichen Farb- und Duftstoffe oder Bestandteile tierischen Ursprungs. Exklusive professionelle und häusliche Pflege, ausgewählt von einem Spezialisten, garantiert die gewünschten Ergebnisse in kürzester Zeit. <br /> <br />
          </p>
        </div>
      </div>

      <div className={styles.brand_section3}>
        <div className='container'>
          <div className={styles.brand_section3_div}>
            <div>
              <img src={brandSection3Img} alt="" />
            </div>
            <div>
              <h2 className={styles.brand_section3_title}>
                Eigenschaften von ONmacabim cosmetics
              </h2>
              <p className={styles.brand_section3_text}>
                <span> </span> Lösungen für mehrere kosmetische Probleme in einer einzigen Behandlung;
              </p>

              <p className={styles.brand_section3_text}>
                <span> </span> Individuelles Herangehen an jeden Kunden, individuelle Behandlungsprotokolle auf der Grundlage der ästhetischen Probleme
              </p>

              <p className={styles.brand_section3_text}>
                <span> </span> Kombinierbarkeit mit Gerätetechniken;
              </p>

              <p className={styles.brand_section3_text}>
                <span> </span> Vorteil der Verwendung von Präparaten aus verschiedenen Linien in einem Verfahren;
              </p>

              <p className={styles.brand_section3_text}>
                <span> </span> Absolute Sicherheit in der Anwendung;
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.brand_section4}>
        <div className="container">
          <div className={styles.brand_section4_div}>
            <div>
              <h2 className={styles.brand_section3_title}>
                Herkunft der Pflanzen für ONmacabim Cosmeceuticals
              </h2>
              <p>
                Die Judäische Wüste ist eine einzigartige Region an der Küste des Toten Meeres. Die Kräuter, die in der Region wachsen, sind seit über zweitausend Jahren für ihre heilende Wirkung bekannt.
              </p>
              <br />
              <p>
                Die rauen klimatischen Bedingungen der Wüste zwingen die Pflanzen dazu, eine große Anzahl nützlicher Inhaltsstoffe anzusammeln und zu bewahren. Alte Manuskripte enthalten häufig Beschreibungen der verschiedenen Möglichkeiten, die Kräuter der judäischen Wüste zur Behandlung verschiedener Krankheiten einzusetzen.
              </p>
            </div>
            <div>
              <img src={brandSection4Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
