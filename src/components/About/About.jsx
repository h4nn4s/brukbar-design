import styles from "./About.module.css";
import aboutImage from "../../assets/images/about/about.jpg";

function About() {
  return (
    <section className={styles.about}>
      <img
        src={aboutImage}
        alt="Brukbar Design"
        className={styles.image}
      />

      <div className={styles.info}>
        <h2>Om Brukbar Design</h2>

        <p>
          Brukbar Design utvecklar och tillverkar belysningsarmaturer med fokus
          på funktion, kvalitet och tidlös formgivning.
        </p>

        <p>
          Genom nära samarbete med kunder och arkitekter skapas lösningar som
          fungerar lika bra i offentliga miljöer som i privata projekt.
        </p>
      </div>
    </section>
  );
}

export default About;