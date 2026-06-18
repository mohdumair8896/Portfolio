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
    <section id="contact" className="section contact-section relative z-10 py-20 bg-slate-950/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header text-center mb-16">
          <span className="section-tag inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
          <h2 className="section-title text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">I&apos;m open to new opportunities, collaborations, and interesting conversations about DevOps and cloud infrastructure.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <a href="mailto:mohdumair8896@gmail.com" className="text-slate-200 hover:text-indigo-400 transition-colors font-medium">mohdumair8896@gmail.com</a>
              </div>
            </div>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <a href="tel:+918896211006" className="text-slate-200 hover:text-indigo-400 transition-colors font-medium">+91-8896211006</a>
              </div>
            </div>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/mohd-umair-shahid" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-indigo-400 transition-colors font-medium">mohd-umair-shahid</a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="form-name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input type="text" id="form-name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="form-email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input type="email" id="form-email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="form-subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input type="text" id="form-subject" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Project collaboration / Job opportunity" />
              </div>
              <div className="mb-8">
                <label htmlFor="form-message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="form-message" rows={5} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/25">
                <span>Send Message</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              
              <div id="form-success" className="hidden mt-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg flex items-center gap-2">
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
