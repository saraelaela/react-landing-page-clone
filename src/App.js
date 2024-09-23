import './App.css';
import BackgroundImageSection from './BackgroundImageSection';
import BackgroundImage2 from './img/hero-2.png';
import Logo from './img/ic-logo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <span>
            INFLATABLE by
            <a href="https://wannathis.one/">
              <img src={Logo} />
            </a>
          </span>
          <a href="https://inflatable.wannathis.one/?ref=landingfolio#download">
            DOWNLOAD FOR FIGMA AND BLENDER
          </a>
        </nav>
      </header>

      <main>
        <section className="heroTextArea wrapper">
          <hgroup>
            <p>stay creative with</p>
            <h1>Inflatable abstract 3d illustrations</h1>
          </hgroup>
        </section>
        <div className="background-renderings">
          <BackgroundImageSection />
        </div>
        <section>
          <img src={BackgroundImage2} />
        </section>
      </main>
    </>
  );
}
