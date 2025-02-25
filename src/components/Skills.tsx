import React from 'react';

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Bootstrap", "CSS", "HTML"]
  },
  {
    category: "Backend",
    items: ["Java", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Lombok", "Spring", "JWT", "Django", "Flask"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "Kubernetes", "Heroku", "Jest"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container px-6 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center text-white">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="p-6 transition-transform transform border rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border-white/20 hover:scale-105 hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-white transition-all duration-300 rounded-full bg-gray-700/50 hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
