const services = [
  ["💻", "Computer Repair", "Desktop and laptop troubleshooting, hardware support and optimization."],
  ["👥", "Business IT Support", "Practical computer support for home offices and small businesses."],
  ["📶", "Wi-Fi & Networking", "Wireless network setup, troubleshooting and device connectivity."],
  ["🛡️", "Virus Removal", "Virus and spyware removal, protection and safer-computing guidance."],
  ["⚙️", "Computer Setup", "New computer, laptop, software and printer setup."],
  ["🌐", "Web Services", "Web design, development, hosting, domains and webmaster support."]
];

export default function Home() {
  return (
    <main>
      <div className="demo">
        UNOFFICIAL REDESIGN CONCEPT — NOT THE OFFICIAL HOBO WEBSITE
      </div>
<header className="nav shell">
  <a className="brand" href="#home">
    <span className="logo">⌨</span>
    <span>
      <b>HOBO</b>
      <small>Computer Services</small>
    </span>
  </a>

  <nav className="desktopNav">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#business">For Business</a>
    <a href="#about">About</a>
    <a href="#support">Support</a>
    <a href="#contact">Contact</a>
  </nav>

  <div className="navActions">
    <a className="call" href="tel:+14165613204">
      ☎ <span>416 561-3204</span>
    </a>

    <details className="mobileMenu">
      <summary aria-label="Open navigation menu">☰</summary>

      <div className="mobileMenuPanel">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#business">For Business</a>
        <a href="#about">About</a>
        <a href="#support">Support</a>
        <a href="#contact">Contact</a>
      </div>
    </details>
  </div>
</header>

      <section id="home" className="hero">
        <div className="shell heroGrid">
          <div>
            <p className="eyebrow">FAST. RELIABLE. LOCAL.</p>

            <h1>
              IT Support for Your<br />
              <span>Home & Business</span>
            </h1>

            <p className="lead">
              Computer repair, networking, setup and more — serving
              Markham, Toronto and the GTA.
            </p>

            <div className="actions">
              <a className="primary" href="#contact">
                Request Support
              </a>

              <a className="secondary" href="tel:+14165613204">
                ☎ Call Now
              </a>
            </div>

            <div className="trust">
              <span>◷ Personalized service</span>
              <span>✓ On-site support</span>
              <span>● Markham & GTA</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="screen">
              <span>IT</span>
              <b>Support</b>
              <small>for the technology you depend on.</small>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="sectionHead">
          <div>
            <h2>Our Services</h2>
            <p>
              Computer solutions for your home, home office and business.
            </p>
          </div>
        </div>

        <div className="cards">
          {services.map(([icon, title, desc]) => (
            <article className="card" key={title}>
              <i>{icon}</i>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact">Get help →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="soft section">
        <div className="shell">
          <h2>Why Choose HOBO?</h2>

          <p className="sub">
            Straightforward technology help without the unnecessary complexity.
          </p>

          <div className="why">
            <div>
              <b>✓ One-stop support</b>
              <p>Sales, repair, setup and support.</p>
            </div>

            <div>
              <b>⌂ Local service</b>
              <p>Based in Markham and serving the GTA.</p>
            </div>

            <div>
              <b>⚡ Practical solutions</b>
              <p>Help with everyday computer and network problems.</p>
            </div>

            <div>
              <b>☻ Personal service</b>
              <p>Support for home-based professionals and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="business" className="section shell">
        <h2>How It Works</h2>

        <div className="steps">
          <div>
            <span>1</span>
            <b>Contact Us</b>
            <p>Call or send a support request.</p>
          </div>

          <div>
            <span>2</span>
            <b>Tell Us the Issue</b>
            <p>Explain the problem and what you need.</p>
          </div>

          <div>
            <span>3</span>
            <b>Get Back to Work</b>
            <p>Get practical support for your technology.</p>
          </div>
        </div>
      </section>

      <section id="support" className="band">
        <div className="shell bandGrid">
          <b>Computer & Laptop Support</b>
          <b>Networking & Printers</b>
          <b>Markham & GTA</b>
          <b>Home & Business</b>
        </div>
      </section>

      <section id="contact" className="section shell contact">
        <div>
          <p className="eyebrow">LOCAL IT SUPPORT</p>
          <h2>Need computer help?</h2>

          <p>
            HOBO Computer Services is located in Markham, Ontario and
            serves Toronto and the GTA.
          </p>

          <div className="contactInfo">
            <p>
              <b>Phone</b><br />
              <a href="tel:+14165613204">416 561-3204</a>
            </p>

            <p>
              <b>Email</b><br />
              <a href="mailto:info@hobocomputerservices.com">
                info@hobocomputerservices.com
              </a>
            </p>
          </div>
        </div>

        <form
          action="mailto:info@hobocomputerservices.com"
          method="post"
          encType="text/plain"
        >
          <h3>Request IT Support</h3>

          <input name="name" placeholder="Full name" required />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />

          <input name="phone" placeholder="Phone number" />

          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Computer Repair</option>
            <option>Business IT Support</option>
            <option>Wi-Fi & Networking</option>
            <option>Virus Removal</option>
            <option>Computer Setup</option>
            <option>Web Services</option>
          </select>

          <textarea
            name="message"
            placeholder="How can we help?"
            rows="5"
          />

          <button type="submit">Send Request →</button>

          <small>
            Demo form: opens your email application. A production version
            would use a secure form backend.
          </small>
        </form>
      </section>

      <footer>
        <div className="shell footer">
          <div className="brand">
            <span className="logo">⌨</span>
            <span>
              <b>HOBO</b>
              <small>Computer Services</small>
            </span>
          </div>

          <p>
            Unofficial redesign concept created for demonstration purposes.
          </p>
        </div>
      </footer>
    </main>
  );
          }
