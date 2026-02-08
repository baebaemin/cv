import './Contact.scss';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <span className="contact__label">(04) — Contact</span>
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
            <a href="#">Instagram</a>
            {/* <a href="#">LinkedIn</a> */}
            <a href="#">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
};
