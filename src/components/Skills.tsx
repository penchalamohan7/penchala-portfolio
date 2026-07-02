interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "Kotlin", "TypeScript", "C++"],
  },
  {
    title: "Frontend",
    skills: [
      "Angular",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "LLMs",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "ReAct",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Azure",
      "AWS",
      "CI/CD",
      "Git",
      "Postman",
      "Swagger",
    ],
  },
  {
    title: "Computer Science",
    skills: [
      "System Design",
      "Low Level Design",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Data Structures & Algorithms",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-zinc-800 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Technical Expertise
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Technologies & Core Competencies
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-400 text-justify">
          My technical expertise spans frontend development, backend
          engineering, artificial intelligence, cloud technologies, and
          software architecture. I enjoy working across the complete
          technology stack to build scalable, maintainable, and
          production-ready applications.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
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
}