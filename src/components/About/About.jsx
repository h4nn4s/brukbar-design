import ContentPanel from "../ContentPanel/ContentPanel";
import aboutImage from "../../assets/images/about/about.jpg";

function About() {
  return (
    <ContentPanel
      image={aboutImage}
      title="Om Brukbar Design"
      variant="about"
    >
      <p>Rätt form. Rätt funktion. Rätt konsult.
        <br />
        <br />
        Brukbar Design är Kristina Tell och Ida Ersmyre, vi träffades när vi studerade till designingenjörer. Kristina är också utbildad arbetsterapeut och har flera års erfarenhet av bland annat hjälpmedel, ergonomi och design för alla. Ida har under flera år arbetat med mekanikkonstruktion.
        <br />
        <br />
        Våra uppdrag varierar i storlek och område, den gemensamma nämnaren är nya, innovativa idéer som uppfyller kundens förväntningar.
      </p>

    </ContentPanel>
  );
}

export default About;