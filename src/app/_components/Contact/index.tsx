import "./index.scss";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <span className="contact__label">/Contact</span>
      <div className="contact__grid">
        <div>
          <span className="contact__field-label">Email</span>
          <a href="mailto:hellobaemin@gmail.com" className="contact__link">
            hellobaemin@gmail.com
          </a>
        </div>
        <div>
          <span className="contact__field-label">Social</span>
          <div className="contact__links">
            <a href="https://www.instagram.com/hellowbaemin/">Instagram</a>
            <a href="https://github.com/baebaemin">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
};
