import styles from "./Contactstyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectiontitle">Contact</h1>
      <form action="">
        <div className="formgroup">
          <label htmlFor="Name" hidden>
            NAME
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Name"
            required
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor="Email" hidden>
            Email
          </label>
          <input
            type="Email"
            name="Email"
            id="Email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor=" Message" hidden>
            Message
          </label>
          <textarea
            name=" Messagee"
            id=" Message"
            placeholder=" Message"
            required
          ></textarea>
        </div>
        <input className="hover-btn" type="submit"Submit
        value="submit"/>
      </form>
    </section>
  );
}

export default Contact;
