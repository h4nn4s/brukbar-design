import ContentPanel from "../ContentPanel/ContentPanel";
import aboutImage from "../../assets/images/about/about.jpg";

function About() {
  return (
    <ContentPanel
      image={aboutImage}
      title="Om Brukbar Design"
    >
      <p>
        Brukbar Design utvecklar och tillverkar belysningsarmaturer med fokus
        på funktion, kvalitet och tidlös formgivning.
      </p>

      <p>
        Genom nära samarbete med kunder och arkitekter skapas lösningar som
        fungerar lika bra i offentliga miljöer som i privata projekt.
      </p>
    </ContentPanel>
  );
}

export default About;