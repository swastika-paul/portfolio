function About() {
  return (
    <section
      id="about"
      className="relative h-[600px] overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src="/images/photo.jpeg"
        alt="About Me"
        className="absolute inset-0 w-full h-full object-cover border-l-purple-300 scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <h2 className="text-5xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-lg text-center text-gray-200 leading-relaxed">
          I'm a passionate full stack developer with a knack for creating
          dynamic and responsive web applications. With a background in
          Electronics and Instrumentation Engineering from NIT Silchar, I
          bring a unique blend of technical expertise and creativity to my
          projects. I thrive on turning ideas into reality through code, and
          I'm always eager to learn new technologies and improve my skills.
        </p>
      </div>
    </section>
  );
}

export default About;