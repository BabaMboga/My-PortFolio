import { response } from "express";
import React, {useState} from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const reponse = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',

        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // add client side success handling here
      } else {
        console.error('Failed to send email');
        // add any client-side error handling here
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };
  
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.6210861255!2d36.88612098884967!3d-1.2257907802001018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1591a2e9a35b%3A0x31a92b030cf1ccd5!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1696412362781!5m2!1sen!2ske"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 
            px-4 lg:px-8 py-8 pl-7"
          >
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={5}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              hover:bg-headingColor text-center ease-linear duration-150">
                Send Message
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
