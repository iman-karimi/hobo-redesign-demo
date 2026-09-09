const services = [
  ["01", "Computer Repair", "Desktop and laptop troubleshooting, hardware support and performance help."],
  ["02", "Business IT Support", "Practical support for home offices, professionals and small businesses."],
  ["03", "Wi-Fi & Networking", "Wireless setup, network troubleshooting, printers and device connectivity."],
  ["04", "Virus Removal", "Virus and spyware removal plus safer-computing guidance."],
  ["05", "Computer Setup", "New computers, laptops, software, printers and internet setup."],
  ["06", "Web Services", "Web design, development, hosting, domains and webmaster support."]
];

const benefits = [
  ["One-stop support", "Sales, repair, setup and everyday technical support in one place."],
  ["Local service", "Based in Markham and serving customers across Toronto and the GTA."],
  ["Practical solutions", "Clear help focused on getting your technology working again."],
  ["Personal service", "Support designed for households, home offices and small businesses."]
];

export default function Home() {
  return (
    <main>
      <div className="demo">UNOFFICIAL REDESIGN CONCEPT — NOT THE OFFICIAL HOBO WEBSITE</div>

      <header className="siteHeader">
        <div className="nav shell">
          <a className="brand" href="#home" aria-label="HOBO Computer Services home">
            <span className="brandMark"><span></span></span>
            <span className="brandText"><b>HOBO</b><small>COMPUTER SERVICES</small></span>
          </a>

          <nav className="desktopNav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#business">For Business</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navActions">
            <a className="phoneLink" href="tel:+14165613204">416 561-3204</a>
            <a className="navCta" href="#contact">Request Support</a>
            <details className="mobileMenu">
              <summary aria-label="Open navigation menu">☰</summary>
              <div className="mobileMenuPanel">
                <a href="#home">Home</a><a href="#services">Services</a><a href="#business">For Business</a><a href="#about">About</a><a href="#contact">Contact</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroGlow heroGlowOne"></div>
        <div className="heroGlow heroGlowTwo"></div>
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">MARKHAM • TORONTO • GTA</p>
            <h1>Reliable IT support for your <span>home & business.</span></h1>
            <p className="lead">Fast, friendly help for computer repair, networking, setup and everyday technology problems.</p>
            <div className="actions">
              <a className="primary" href="#contact">Request Support <span>→</span></a>
              <a className="secondary" href="tel:+14165613204">Call 416 561-3204</a>
            </div>
            <div className="trustRow">
              <span><b>✓</b> Personalized service</span>
              <span><b>✓</b> On-site support</span>
              <span><b>✓</b> Local GTA service</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="Technology support illustration">
            <div className="visualCard">
              <div className="visualTop"><span></span><span></span><span></span></div>
              <div className="visualScreen">
                <div className="pulseRing"><div className="pulseCore">IT</div></div>
                <div className="signal signalA"></div><div className="signal signalB"></div><div className="signal signalC"></div>
              </div>
              <div className="visualFooter"><span>Computer</span><span>Network</span><span>Support</span></div>
            </div>
            <div className="floatingBadge badgeOne"><strong>LOCAL</strong><small>Markham & GTA</small></div>
            <div className="floatingBadge badgeTwo"><strong>SUPPORT</strong><small>Home & Business</small></div>
          </div>
        </div>
      </section>

      <section className="proofBar">
        <div className="shell proofGrid">
          <span>Computer & Laptop Support</span><span>Wi-Fi & Networking</span><span>Virus & Spyware Removal</span><span>Home & Business</span>
        </div>
      </section>

      <section id="services" className="section shell servicesSection">
        <div className="sectionHead splitHead">
          <div><p className="eyebrow dark">WHAT WE DO</p><h2>Complete computer support, without the complexity.</h2></div>
          <p>From a slow laptop to office networking, HOBO provides practical technology help for the systems you rely on every day.</p>
        </div>

        <div className="cards">
          {services.map(([num, title, desc]) => (
            <article className="card" key={title}>
              <div className="cardTop"><span className="cardNum">{num}</span><span className="cardArrow">↗</span></div>
              <h3>{title}</h3><p>{desc}</p><a href="#contact">Get support <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="business" className="businessSection">
        <div className="shell businessGrid">
          <div className="businessVisual">
            <div className="dashboardWindow">
              <div className="dashboardHeader"><b>HOBO</b><span>System support</span></div>
              <div className="dashboardBody">
                <div className="dashboardSide"><i></i><i></i><i></i><i></i></div>
                <div className="dashboardMain">
                  <div className="statusCard"><small>NETWORK</small><strong>Connected</strong><span className="statusLine"><i></i></span></div>
                  <div className="miniGrid"><div><small>DEVICES</small><b>Ready</b></div><div><small>SUPPORT</small><b>Local</b></div></div>
                  <div className="activity"><span></span><span></span><span></span><span></span><span></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="businessCopy">
            <p className="eyebrow">FOR HOME OFFICES & SMALL BUSINESS</p>
            <h2>Technology should help you work — not slow you down.</h2>
            <p>HOBO supports the computers, wireless networks, printers and everyday systems that keep small businesses and home-based professionals moving.</p>
            <div className="businessList"><span>✓ New workstation setup</span><span>✓ Network & Wi-Fi troubleshooting</span><span>✓ Printer and device connectivity</span><span>✓ Computer support & repair</span></div>
            <a className="textLink" href="#contact">Talk about your setup →</a>
          </div>
        </div>
      </section>

      <section id="about" className="section whySection">
        <div className="shell">
          <div className="sectionHead centered"><p className="eyebrow dark">WHY HOBO</p><h2>Local support. Clear answers. Practical help.</h2><p>Technology support built around real needs, not unnecessary complexity.</p></div>
          <div className="whyGrid">
            {benefits.map(([title, desc], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="processSection">
        <div className="shell processGrid">
          <div><p className="eyebrow">SIMPLE PROCESS</p><h2>Support in three straightforward steps.</h2></div>
          <div className="steps">
            <div><span>01</span><div><b>Contact HOBO</b><p>Call or send a support request.</p></div></div>
            <div><span>02</span><div><b>Explain the issue</b><p>Tell us what is happening and what you need.</p></div></div>
            <div><span>03</span><div><b>Get practical support</b><p>Get help for your computer, network or setup.</p></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div className="shell contactGrid">
          <div className="contactCopy">
            <p className="eyebrow">LET'S SOLVE THE PROBLEM</p>
            <h2>Need computer help?</h2>
            <p>HOBO Computer Services is located in Markham and serves Toronto and the GTA.</p>
            <div className="contactDetails"><a href="tel:+14165613204"><small>PHONE</small><strong>416 561-3204</strong></a><a href="mailto:info@hobocomputerservices.com"><small>EMAIL</small><strong>info@hobocomputerservices.com</strong></a></div>
          </div>

          <form action="mailto:info@hobocomputerservices.com" method="post" encType="text/plain">
            <div className="formHead"><span>REQUEST SUPPORT</span><small>Tell us how we can help.</small></div>
            <div className="formRow"><input name="name" placeholder="Full name" required /><input name="email" type="email" placeholder="Email address" required /></div>
            <div className="formRow"><input name="phone" placeholder="Phone number" /><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Computer Repair</option><option>Business IT Support</option><option>Wi-Fi & Networking</option><option>Virus Removal</option><option>Computer Setup</option><option>Web Services</option></select></div>
            <textarea name="message" placeholder="How can we help?" rows="5" />
            <button type="submit">Send Request <span>→</span></button>
            <small className="formNote">Demo form: opens your email application. A production version would use a secure form backend.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <div className="brand inverse"><span className="brandMark"><span></span></span><span className="brandText"><b>HOBO</b><small>COMPUTER SERVICES</small></span></div>
          <div className="footerLinks"><a href="#services">Services</a><a href="#business">For Business</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        </div>
        <div className="shell footerBottom"><p>Unofficial redesign concept created for demonstration purposes.</p><p>Markham • Toronto • GTA</p></div>
      </footer>
    </main>
  );
}
