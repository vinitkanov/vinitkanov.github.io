import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-32 pb-64">
      <h2 className="text-6xl font-bold mb-6">projects.</h2>
      <p className="max-w-2xl mb-10 pt-10 pb-24">
        These reflect the skills I’ve developed while studying software development.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <div key={i} className="bg-purple-500 p-4 rounded-xl text-black max-w-[600px] ">
            <div className="h-40 mb-4">{proj.img}</div>
            <p className="text-xs">{proj.date}</p>
            <h3 className="font-bold">{proj.title}</h3>
            <p className="text-sm">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
