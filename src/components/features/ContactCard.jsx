function ContactCard({ label, href, icon, gradient, text, aria }) {
  return (
    <a
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
