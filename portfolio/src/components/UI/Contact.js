import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
          <iframe
            title='google-maps'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.6210861255!2d36.88612098884967!3d-1.2257907802001018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1591a2e9a35b%3A0x31a92b030cf1ccd5!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1696412362781!5m2!1sen!2ske"
            className="border-0 w-full h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
