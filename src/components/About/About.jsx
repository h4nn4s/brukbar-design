import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className={styles.about}>
      <h1>Om Brukbar Design</h1>

      <p>
        Brukbar Design utvecklar och tillverkar belysningsarmaturer med fokus
        på funktion, kvalitet och tidlös formgivning.
      </p>

      <p>
        Genom nära samarbete med kunder och arkitekter skapas lösningar som
        fungerar lika bra i offentliga miljöer som i privata projekt.
      </p>

        <p><Link to="/">← Till produkter</Link></p>
    </section>
  );
}

export default About;

