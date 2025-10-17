import React from "react";
import { BiEnvelope, BiMap, BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="pb-16 pt-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me and see how I can help you reach your goals.
          </p>

          <div className="mt-7 space-y-4">
            <div className="flex items-center space-x-3">
              <BiPhoneCall className="w-8 h-8 text-cyan-300" />
              <a
                href="tel:+923114802732"
                className="text-lg font-bold text-cyan-400 hover:underline"
              >
                +92 311 4802732
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <BiEnvelope className="w-8 h-8 text-cyan-300" />
              <a
                href="mailto:youahmadkhan@gmail.com"
                className="text-lg font-bold text-cyan-400 hover:underline"
              >
                youahmadkhan@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <BiMap className="w-8 h-8 text-cyan-300" />
              <a
                href="https://www.google.com/maps?q=Lahore,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-cyan-400 hover:underline"
              >
                Lahore, Pakistan
              </a>
            </div>

          </div>

          <div className="flex items-center mt-8 space-x-4">
            <SocialIcon
              link="https://www.facebook.com/"
              icon={<FaFacebook className="text-white w-6 h-6" />}
              hoverColor="hover:bg-blue-700"
            />
            <SocialIcon
              link="https://www.linkedin.com/in/muhammad-ahmad-940653252/"
              icon={<FaLinkedin className="text-white w-6 h-6" />}
              hoverColor="hover:bg-cyan-600"
            />
            <SocialIcon
              link="https://www.instagram.com/"
              icon={<FaInstagram className="text-white w-6 h-6" />}
              hoverColor="hover:bg-pink-500"
            />
            <SocialIcon
              link="https://twitter.com/"
              icon={<FaTwitter className="text-white w-6 h-6" />}
              hoverColor="hover:bg-sky-500"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
