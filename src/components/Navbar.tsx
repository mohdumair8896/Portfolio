import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <div className="nav-container">
        <Link href="#home" className="nav-logo">
          <span className="logo-text">MU<span className="logo-accent">.</span></span>
        </Link>
        <ul className="nav-links" id="nav-links">
          <li><Link href="#home" className="nav-link active" id="nav-home">Home</Link></li>
          <li><Link href="#about" className="nav-link" id="nav-about">About</Link></li>
          <li><Link href="#skills" className="nav-link" id="nav-skills">Skills</Link></li>
          <li><Link href="#experience" className="nav-link" id="nav-experience">Experience</Link></li>
          <li><Link href="#projects" className="nav-link" id="nav-projects">Projects</Link></li>
          <li><Link href="#certifications" className="nav-link" id="nav-certifications">Certs</Link></li>
          <li><Link href="#contact" className="nav-link" id="nav-contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <a href="/MagicalCV__1_.pdf" download="Mohd_Umair_Shahid_Resume.pdf" className="btn-resume" id="resume-download-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Resume</span>
          </a>
          <button className="hamburger" id="hamburger" aria-label="Toggle Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
