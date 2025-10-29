import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <p className="section-subtitle">
        You can view my resume directly below or download a copy.
      </p>
      <div className="resume-viewer">
        <iframe
          src="/kruti_makavana_resume.pdf"
          title="Kruti Makavana Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </section>
  );
}
