import Hero from "../layouts/Hero";
import ContactCard from "../features/ContactCard";
import { FiMail, FiGithub } from "react-icons/fi";
import { SiLine } from "react-icons/si";

function Contact() {
  // contact data
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:ytsung99@gmail.com",
      icon: <FiMail size={24} />,
      gradient: "from-blue-500 to-purple-600",
      text: "ytsung99@gmail.com",
      aria: "Send Email",
    },
    {
      label: "Line",
      href: "https://line.me/ti/p/e125710020",
      icon: <SiLine size={24} />,
      gradient: "from-green-500 to-blue-600",
      text: "Click to add line",
      aria: "Add Line",
    },
    {
      label: "GitHub",
      href: "https://github.com/TunaSung?tab=repositories",
      icon: <FiGithub size={24} />,
      gradient: "from-purple-500 to-pink-600",
      text: "github.com/tunasung",
      aria: "GitHub",
    },
  ];

  return (
    <section id="contact">
      <Hero bgc="#18212F">
        <div className="container-mid text-center">
          {/* start title */}
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 h-15 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          {/* end title */}

          {/* start subtitle */}
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          {/* end subtitle */}

          {/* start hyperlink */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactLinks.map(({ label, href, icon, gradient, text, aria }) => (
              <ContactCard
                key={label}
                label={label}
                href={href}
                icon={icon}
                gradient={gradient}
                text={text}
                aria={aria}
              />
            ))}
          </div>
        </div>
      </Hero>
    </section>
  );
}

export default Contact;
