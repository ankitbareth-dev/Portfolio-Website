import styles from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // I can add form submission logic here
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Get In Touch</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
