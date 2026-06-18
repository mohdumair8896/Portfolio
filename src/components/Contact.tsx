"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("form-success")?.classList.remove("hidden");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => {
      document.getElementById("form-success")?.classList.add("hidden");
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">I&apos;m open to new opportunities, collaborations, and interesting conversations about DevOps and cloud infrastructure.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="contact-label">Email</p>
                <a href="mailto:mohdumair8896@gmail.com" className="contact-value">mohdumair8896@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              </div>
              <div>
                <p className="contact-label">Phone</p>
                <a href="tel:+918896211006" className="contact-value">+91-8896211006</a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon linkedin-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/mohd-umair-shahid" target="_blank" rel="noopener noreferrer" className="contact-value">mohd-umair-shahid</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Your Name</label>
                  <input type="text" id="form-name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Your Email</label>
                  <input type="email" id="form-email" required placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input type="text" id="form-subject" required placeholder="Project collaboration / Job opportunity" />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea id="form-message" rows={5} required placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span>Send Message</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              
              <div id="form-success" className="form-success hidden">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Message sent! I&apos;ll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
