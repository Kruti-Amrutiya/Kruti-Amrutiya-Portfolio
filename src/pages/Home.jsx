import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profileImg.png";

export default function Home() {
  const words = useMemo(
    () => [
      "Software Developer",
      "Fullstack Developer",
      "Open Source Contributor",
      "Proficient in JavaScript",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [speed, setSpeed] = useState(150);

  // typing effect
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setIsDeleting(true);
      setSpeed(100);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      setSpeed(150);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, speed, words]);

  // blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="intro" id="home">
      <div className="home-container">
        <div className="home-image">
          <img src={profileImg} alt="Kruti Makavana" className="profile-pic" />
        </div>

        <div className="home-content">
          <h1>
            Hi There, 👋
            <br />
            <span className="highlight">I'm Kruti Makavana</span>
          </h1>
          <p className="typing-text">
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </p>
          <p className="intro-description">
            I’m a passionate Frontend Developer focused on creating interactive,
            responsive, and accessible web applications. I love working with
            modern JavaScript frameworks and bringing beautiful designs to life
            through clean, maintainable code.
          </p>
          <p className="focus-line">
            I specialize in building performant, user-friendly web applications.
          </p>
          <div className="quick-info">
            <span>📍 Vadodara, India</span>
            <span>
              💼 Software Engineer at{" "}
              <a
                href="https://www.tntra.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                Tntra
              </a>
            </span>
            <span>🚀 Open to Remote Opportunities</span>
          </div>
          <p className="connect-text">Connect with me:</p>
          <div className="intro-buttons">
            <a
              href="https://github.com/Kruti-Amrutiya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kruti-amrutiya-5a4a9315b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
