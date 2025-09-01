import { useEffect } from "react";
import AOS from 'aos'

function ContactCard({ label, href, icon, gradient, text, aria, offset }) {

  useEffect(() => {
      AOS.init({ once: false, duration: 500, easing: 'ease-in-out' })
    }, [])

  return (
    <a
      data-aos='fade-out-up'
      data-aos-offset={offset}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className="group"
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-200 ease-out`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-gray-300 mb-2">{label}</h3>
      <p className="text-gray-400">{text}</p>
    </a>
  );
}

export default ContactCard;
