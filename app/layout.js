import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "HOBO Computer Services | Redesign Concept",
  description: "Unofficial redesign concept for a Markham IT support business."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <style>{`
          .whyExperiment {
            position: relative;
            overflow: hidden;
            background: linear-gradient(90deg, #ffffff 0%, #f6fbff 52%, #eef6ff 100%);
            border-top: 1px solid #e7eef6;
            border-bottom: 1px solid #e7eef6;
          }
          .whyExperimentInner {
            width: min(1440px, 94%);
            min-height: 430px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.45fr .95fr;
            align-items: stretch;
          }
          .whyExperimentCopy {
            padding: 54px 44px 50px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 2;
          }
          .whyExperimentCopy h2 {
            margin: 0;
            color: #0a1f3f;
            font-size: clamp(34px, 3.4vw, 54px);
            line-height: 1.03;
            letter-spacing: -.035em;
          }
          .whyExperimentCopy > p {
            margin: 12px 0 34px;
            color: #38506d;
            font-size: clamp(15px, 1.25vw, 20px);
          }
          .whyExperimentBenefits {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0;
          }
          .whyExperimentItem {
            min-width: 0;
            padding: 0 26px;
            border-left: 1px solid #d7e2ef;
          }
          .whyExperimentItem:first-child {
            border-left: 0;
            padding-left: 0;
          }
          .whyExperimentIcon {
            width: 58px;
            height: 58px;
            color: #0b73de;
            display: grid;
            place-items: center;
            margin-bottom: 15px;
          }
          .whyExperimentIcon svg {
            width: 52px;
            height: 52px;
            fill: none;
            stroke: currentColor;
            stroke-width: 1.9;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .whyExperimentItem h3 {
            margin: 0 0 8px;
            color: #0a1f3f;
            font-size: 17px;
            line-height: 1.25;
          }
          .whyExperimentItem p {
            margin: 0;
            color: #425a75;
            font-size: 14px;
            line-height: 1.55;
          }
          .whyExperimentVisual {
            position: relative;
            min-height: 430px;
            background: linear-gradient(145deg, #edf5fb 0%, #f9fcff 52%, #eaf2f8 100%);
            overflow: hidden;
          }
          .whyExperimentDesk {
            position: absolute;
            left: -6%;
            right: -8%;
            bottom: 0;
            height: 28%;
            background: linear-gradient(180deg, #d7b891, #c79e73);
            transform: skewX(-4deg);
          }
          .whyExperimentLaptop {
            position: absolute;
            width: 47%;
            aspect-ratio: 1.45;
            left: 24%;
            bottom: 20%;
            background: #c8d2dc;
            border-radius: 10px 10px 16px 16px;
            transform: perspective(900px) rotateY(-8deg) rotateX(2deg);
            box-shadow: 0 22px 40px rgba(22, 45, 72, .25);
          }
          .whyExperimentLaptop:before {
            content: "";
            position: absolute;
            inset: 5% 6% 19%;
            border-radius: 6px;
            background:
              linear-gradient(90deg, rgba(13,34,59,.92) 0 25%, transparent 25%),
              linear-gradient(135deg, #0c2b50, #0b4f93);
            border: 5px solid #1c2734;
          }
          .whyExperimentLaptop:after {
            content: "";
            position: absolute;
            left: -6%;
            right: -6%;
            bottom: 0;
            height: 18%;
            border-radius: 5px 5px 13px 13px;
            background: linear-gradient(180deg, #dce4eb, #aebbc8);
          }
          .whyExperimentPlant {
            position: absolute;
            width: 15%;
            height: 30%;
            left: 7%;
            bottom: 25%;
          }
          .whyExperimentPlant:before {
            content: "";
            position: absolute;
            left: 22%; right: 22%; bottom: 0;
            height: 35%;
            background: #f8fafb;
            border-radius: 4px 4px 12px 12px;
            box-shadow: 0 8px 15px rgba(30,50,70,.12);
          }
          .whyExperimentPlant:after {
            content: "";
            position: absolute;
            left: 10%; right: 10%; top: 0;
            height: 72%;
            background: repeating-linear-gradient(78deg, transparent 0 9px, #6d9d6f 10px 14px, transparent 15px 22px);
            transform: skewX(-8deg);
          }
          .whyExperimentMug {
            position: absolute;
            right: 7%;
            bottom: 15%;
            width: 110px;
            height: 124px;
            background: #fff;
            border-radius: 9px 9px 20px 20px;
            box-shadow: 0 15px 24px rgba(34,45,58,.16);
            display: grid;
            place-items: center;
            text-align: center;
            color: #0a1f3f;
            font-weight: 800;
            font-size: 20px;
            line-height: .95;
            z-index: 3;
          }
          .whyExperimentMug:after {
            content: "";
            position: absolute;
            width: 40px;
            height: 50px;
            right: -34px;
            top: 23px;
            border: 10px solid #fff;
            border-left: 0;
            border-radius: 0 30px 30px 0;
          }
          .whyExperimentNote {
            position: absolute;
            right: 8%;
            top: 12%;
            width: 190px;
            color: #143b72;
            font-family: "Comic Sans MS", "Bradley Hand", cursive;
            font-size: 27px;
            line-height: 1.05;
            transform: rotate(-4deg);
            text-align: center;
            z-index: 4;
          }
          .whyExperimentNote:after {
            content: "";
            display: block;
            width: 130px;
            height: 4px;
            margin: 12px auto 0;
            background: #0b73de;
            border-radius: 999px;
            transform: rotate(-5deg);
          }
          .whyExperimentTag {
            position: absolute;
            left: 16px;
            top: 14px;
            z-index: 5;
            padding: 6px 9px;
            border-radius: 999px;
            background: rgba(255,255,255,.9);
            border: 1px solid #d7e3ef;
            color: #5d7188;
            font-size: 10px;
            letter-spacing: .12em;
            font-weight: 800;
          }
          @media (max-width: 1100px) {
            .whyExperimentInner { grid-template-columns: 1fr; }
            .whyExperimentCopy { padding: 46px 0 38px; }
            .whyExperimentVisual { min-height: 360px; }
          }
          @media (max-width: 760px) {
            .whyExperimentBenefits { grid-template-columns: 1fr 1fr; gap: 26px 0; }
            .whyExperimentItem:nth-child(3) { border-left: 0; padding-left: 0; }
            .whyExperimentVisual { min-height: 320px; }
            .whyExperimentMug { transform: scale(.82); transform-origin: bottom right; }
            .whyExperimentNote { font-size: 22px; right: 4%; }
          }
          @media (max-width: 520px) {
            .whyExperimentInner { width: min(100% - 30px, 1440px); }
            .whyExperimentCopy { padding-top: 38px; }
            .whyExperimentBenefits { grid-template-columns: 1fr; gap: 22px; }
            .whyExperimentItem,
            .whyExperimentItem:nth-child(3) { border-left: 0; padding: 0; }
            .whyExperimentVisual { min-height: 270px; }
            .whyExperimentLaptop { width: 54%; left: 18%; }
            .whyExperimentPlant { left: 2%; }
            .whyExperimentMug { right: 2%; transform: scale(.68); }
            .whyExperimentNote { width: 150px; font-size: 18px; top: 10%; }
          }
        `}</style>

        <Script id="why-hobo-experiment" strategy="afterInteractive">
          {`
            (() => {
              if (document.querySelector('.whyExperiment')) return;
              const about = document.querySelector('#about');
              if (!about) return;
              const section = document.createElement('section');
              section.className = 'whyExperiment';
              section.setAttribute('aria-label', 'Experimental Why Choose HOBO section');
              section.innerHTML = `
                <div class="whyExperimentInner">
                  <div class="whyExperimentCopy">
                    <span class="whyExperimentTag">EXPERIMENTAL SECTION</span>
                    <h2>Why Choose HOBO?</h2>
                    <p>We're more than just computer support. We're your local IT partner.</p>
                    <div class="whyExperimentBenefits">
                      <article class="whyExperimentItem">
                        <div class="whyExperimentIcon"><svg viewBox="0 0 24 24"><path d="M7 22v-8l4-9 2 1v5h5a2 2 0 0 1 2 2l-1.3 6a2 2 0 0 1-2 1.6H7Z"/><path d="M3 13h4v9H3z"/></svg></div>
                        <h3>Experienced</h3>
                        <p>Years of hands-on experience with home and business IT.</p>
                      </article>
                      <article class="whyExperimentItem">
                        <div class="whyExperimentIcon"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M14 15.5a5 5 0 0 1 7 4.5v1"/></svg></div>
                        <h3>Friendly &amp; Personal</h3>
                        <p>We explain things in plain English.</p>
                      </article>
                      <article class="whyExperimentItem">
                        <div class="whyExperimentIcon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v6l4 2"/></svg></div>
                        <h3>Fast &amp; Reliable</h3>
                        <p>Quick response and efficient service.</p>
                      </article>
                      <article class="whyExperimentItem">
                        <div class="whyExperimentIcon"><svg viewBox="0 0 24 24"><path d="M12 22s7-6.2 7-13a7 7 0 1 0-14 0c0 6.8 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
                        <h3>Local to Markham</h3>
                        <p>Proudly serving Markham and the Greater Toronto Area.</p>
                      </article>
                    </div>
                  </div>
                  <div class="whyExperimentVisual" aria-hidden="true">
                    <div class="whyExperimentPlant"></div>
                    <div class="whyExperimentLaptop"></div>
                    <div class="whyExperimentMug">Good<br/>Tech<br/>Better<br/>Days</div>
                    <div class="whyExperimentNote">Small Business<br/>Big Possibilities</div>
                    <div class="whyExperimentDesk"></div>
                  </div>
                </div>`;
              about.insertAdjacentElement('afterend', section);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
