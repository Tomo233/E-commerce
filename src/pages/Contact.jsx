function Contact() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <div>
            <div>
              <img src="" alt="" />
              <p>Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <p>Write To Us</p>
            </div>
            <p>
              Fill out our form and we will contact you within 24 hours.
              <p>Emails: support@exclusive.com</p>
            </p>
            <p>Emails: customer@exclusive.com</p>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <input type="number" placeholder="Your Phone *" required />
          <input type="text" placeholder="Your Message *" required />
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
