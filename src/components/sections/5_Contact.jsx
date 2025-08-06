import Hero from "../Hero";

function Contact() {
  return (
    <section id="contact">
      <Hero bgc="#18212F">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <a href="mailto:ytsung99@gmail.com" target="_blank">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-200">
                📧
              </div>
              <h3 className="font-semibold text-gray-300 mb-2">Email</h3>
              <p className="text-gray-400">ytsung99@gmail.com</p>
            </a>
            <a href="https://line.me/ti/p/e125710020" target="_blank">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-200">
                💼
              </div>
              <h3 className="font-semibold text-gray-300 mb-2">Line</h3>
              <p className="text-gray-400">line/榆</p>
            </a>
            <a
              href="https://github.com/TunaSung?tab=repositories"
              target="_blank"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-200">
                🐙
              </div>
              <h3 className="font-semibold text-gray-300 mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/tunasung</p>
            </a>
          </div>
        </div>
      </Hero>
    </section>
  );
}

export default Contact;
