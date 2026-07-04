import projects from './project.json';
function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">MY PROJECTS</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-transparent border border-gray-600 p-6 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
              <a
                href={project.github}
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
               <p
                href={project.live}
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
 export default Projects;