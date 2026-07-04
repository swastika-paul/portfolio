function Skills(){
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js, Express", "MongoDB", "Git", "GitHub", "Tailwind CSS", "MYSQL", "C++", "C", "Mongoose"];
    return (
        <section id="skills" className="relative bg-slate-950  text-white px-10 py-20">
            <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/bg.mp4" type="video/mp4" />
</video>
  {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-10xl ">
                <h2 className="text-3xl font-bold mb-8 mt-6 ">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill,index)=> (
                        <div key={index}
                        className="border border-gray-700 rounded-md py-3 text-center text-gray-300 hover:bg-slate-900 hover:text-white transition">
                            {skill}
                        </div>
                    ))}
                    <div>

                    </div>
                </div>


            </div>

        </section>
    )
}
export default Skills;
