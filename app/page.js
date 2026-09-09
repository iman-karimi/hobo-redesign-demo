const services = [
  ["01", "⌘", "Computer Repair", "Desktop and laptop troubleshooting, hardware support and performance help."],
  ["02", "▦", "Business IT Support", "Practical support for home offices, professionals and small businesses."],
  ["03", "◎", "Wi-Fi & Networking", "Wireless setup, network troubleshooting, printers and device connectivity."],
  ["04", "✦", "Virus Removal", "Virus and spyware removal plus safer-computing guidance."],
  ["05", "⚙", "Computer Setup", "New computers, laptops, software, printers and internet setup."],
  ["06", "</>", "Web Services", "Web design, development, hosting, domains and webmaster support."]
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
      <style>{`
        .brandMark{overflow:hidden;background:linear-gradient(145deg,#f5f9ff,#eaf3ff);box-shadow:inset 0 0 0 1px rgba(17,105,219,.05)}
        .brandMark:before{width:23px!important;height:16px!important;top:8px!important;background:transparent!important;border:2px solid #1169db;border-radius:4px!important}
        .brandMark:after{width:17px!important;height:2px!important;top:27px!important;background:#1169db!important;border-radius:99px!important}
        .brandMark span{display:none!important}
        .servicesSection{padding-top:88px;padding-bottom:96px}
        .servicesSection .splitHead{margin-bottom:34px}
        .cards{gap:22px!important}
        .card{position:relative;min-height:232px!important;padding:24px 25px 23px!important;border-radius:18px!important;border:1px solid #e1e9f2!important;background:linear-gradient(180deg,#fff 0%,#fbfdff 100%)!important;box-shadow:0 8px 24px rgba(18,50,86,.045);overflow:hidden}
        .card:before{content:"";position:absolute;inset:0 auto 0 0;width:3px;background:#1169db;opacity:0;transition:.25s}
        .card:hover{transform:translateY(-4px)!important;box-shadow:0 18px 38px rgba(15,42,74,.10)!important;border-color:#cfe0f4!important}
        .card:hover:before{opacity:1}
        .cardTop{align-items:center!important}
        .serviceMeta{display:flex;align-items:center;gap:11px}
        .serviceIcon{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:#edf5ff;color:#1169db;font-size:16px;font-weight:800;line-height:1}
        .cardNum{font-size:10px!important;letter-spacing:.14em!important;color:#7990aa!important}
        .cardArrow{width:31px!important;height:31px!important;font-size:13px;transition:.2s}
        .card:hover .cardArrow{background:#1169db;color:white;transform:translate(1px,-1px)}
        .card h3{font-size:21px!important;margin:20px 0 8px!important;line-height:1.2}
        .card p{font-size:14.5px;line-height:1.58!important;max-width:95%}
        .card a{margin-top:18px!important;padding-top:0!important;font-size:12.5px!important;display:inline-flex;gap:6px;align-items:center}
        .card a span{transition:.2s}.card:hover a span{transform:translateX(3px)}
        @media(max-width:980px){.cards{gap:18px!important}.card{min-height:220px!important}}
        @media(max-width:640px){.servicesSection{padding-top:64px;padding-bottom:68px}.cards{gap:14px!important}.card{min-height:0!important;padding:21px!important}.card h3{margin-top:17px!important}.card p{max-width:100%}.serviceIcon{width:36px;height:36px}}
      `}</style>

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
          {services.map(([num, icon, title, desc]) => (
            <article className="card" key={title}>
              <div className="cardTop">
                <div className="serviceMeta"><span className="serviceIcon">{icon}</span><span className="cardNum">{num}</span></div>
                <span className="cardArrow">↗</span>
              </div>
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
