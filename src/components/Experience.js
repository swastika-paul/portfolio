import experience from './Experience.json';
function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-8">My Experience</h2>
         <div className="flex animate-scroll gap-8 w-max">
                {[...experience, ...experience, ...experience].map((experience, index) => (
                  <div key={index} className="bg-transparent border border-gray-600 p-6 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-shadow duration-300">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-gray-400 mb-4">{experience.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{experience.tech}</p>
                    <a
                      href={experience.github}
                      className="text-blue-400 hover:underline"
                    >
                      View on GitHub
                    </a>
                     <p
                      href={experience.live}
                      className="text-blue-400 hover:underline"
                    >
                      View Live
                    </p>
                  </div>
                ))}
              </div>
      </div>
    </section>
  );
}

export default Experience;