import './App.css';
import BackgroundImageSection from './BackgroundImageSection';
import Logo from './img/ic-logo.svg';
import CaseExample1 from './img/phone-1-p-500.png';
import CaseExample2 from './img/phone-2-p-500.png';
import CaseExample3 from './img/phone-3-p-500.png';
import MediaPlayer from './img/play-p-1080.png';
import InfoBox from './InfoBox';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <span className="company">
            <span className="companyName">Inflatable</span> by
            <a href="https://wannathis.one/">
              <img alt="Logo" src={Logo} />
            </a>
          </span>
          <span className="callToAction">
            <a href="https://inflatable.wannathis.one/?ref=landingfolio#download">
              Download Figma and Blender
            </a>
          </span>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p>Stay creative with</p>
          <h1>Inflatable abstract 3d illustrations</h1>
        </section>

        <BackgroundImageSection className="Canvas" />

        <InfoBox />

        <section className="pageDivider">
          <h1>Grab attention with realistic materials and Textures</h1>
          <img alt="3D Mediaplayer Artwork" src={MediaPlayer} />
          <p>
            We've carefully selected materials and textures that capture the
            essence of the inflatable style. They add a tactility to your
            designs, making them feel more interactive and engaging.
          </p>
        </section>

        <section className="productPalette">
          <h1>
            Perfect for websites, apps, email marketing, branding, social media
            and other design projects.
          </h1>
          <div className="caseWrapper">
            <img alt="3D CaseExample Artwork" src={CaseExample1} />
            <img alt="3D CaseExample Artwork" src={CaseExample2} />
            <img alt="3D CaseExample Artwork" src={CaseExample3} />
          </div>
        </section>
      </main>
    </>
  );
}
