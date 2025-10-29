import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact-text">
        I’m always open to new opportunities and collaborations. Whether it’s
        open-source work, freelance projects, or full-time roles — feel free to
        reach out!
      </p>

      <div className="contact-links">
        <a
          href="mailto:krutiamrutiya1998@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="contact-icon" /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/kruti-amrutiya-5a4a9315b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>

        <a
          href="https://github.com/Kruti-Amrutiya"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="contact-icon" /> GitHub
        </a>
      </div>
    </section>
  );
}
