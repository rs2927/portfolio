import styles from "./projetsstyles.module.css";
import news from "../../assets/NO.webp";
import purchase from "../../assets/viberr.png";
import phone from "../../assets/phone.jpg";
import Projectcard from "../../Common/projectcard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectiontitle">PROJECTS</h1>
      <div className={styles.projectscontainer}>
        <Projectcard
          src={news}
          link="https://github.com/rs2927?tab=repositories"
          h3="breaking News"
        />

        <Projectcard
          src={phone}
          link="https://github.com/rs2927?tab=repositories"
          h3="phonomaniaa"
        />

        <Projectcard
          src={purchase}
          link="https://github.com/rs2927?tab=repositories"
          h3="Purchase cource and blog mangement"
        />
      </div>
    </section>
  );
}

export default Projects;
