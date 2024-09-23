import './App.css';
import BackgroundImage1 from './img/hero-1.png';
import BackgroundImage2 from './img/hero-2.png';
import BackgroundImage3 from './img/hero-3.png';
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

        <section className="backgroundImage">
          <img alt="floating 3D Element" src={BackgroundImage1} />

          <img alt="floating 3D Element" src={BackgroundImage3} />
          <img alt="floating 3D Element" src={BackgroundImage2} />
        </section>
      </main>
    </>
  );
}
