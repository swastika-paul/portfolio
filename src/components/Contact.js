function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white px-10 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for collaborations or just a friendly hello 
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="paulswastika267@gmail.com"
            className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/swastika-paul-05186a381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
           <a
            href="https://github.com/swastika-paul"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black"
          >
          github
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black"
          >
          Discord
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
