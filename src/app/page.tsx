import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { CV } from "./_components/CV";
import { Works } from "./_components/Works";
import { Contact } from "./_components/Contact";
import "./page.scss";

function Home() {
  return (
    <div className="page">
      <div className="page__inner">
        <aside className="page__left-col">
          <Hero />
          <div className="page__left-col-scroll">
            <div className="page__left-inner">
              <div>
                <About />
                <Contact />
              </div>
            </div>
          </div>
        </aside>

        <main className="page__right-col">
          <div className="page__right-inner">
            <div className="page__cv-wrap">
              <CV />
            </div>
            <Works />
            <footer className="page__footer">
              © {new Date().getFullYear()} BAE MINKYOUNG
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
