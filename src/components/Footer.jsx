import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">Copyright © 2025 Kruti Makavana</div>

      <div className="footer-links">
        <a href="mailto:krutiamrutiya1998@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Kruti-Amrutiya"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kruti-amrutiya-5a4a9315b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
