const cards = [
  {
    title: "Frontend Development",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "Responsive UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "Kotlin",
      "MongoDB",
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      "LLMs",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "ReAct",
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
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-zinc-800 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">
          About Me
        </p>

        <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
          Engineering Solutions That Deliver
          Real Business Impact
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-9 text-zinc-400 text-justify">

          <p>
            I am a Full Stack Software Engineer with experience designing and
            developing enterprise applications across frontend, backend, AI,
            and cloud technologies. My work focuses on building scalable,
            maintainable, and user-centric software that improves developer
            productivity and delivers measurable business value.
          </p>

          <p>
            At BNY, I contribute to enterprise platforms by developing modern
            user interfaces, scalable REST APIs, workflow automation, AI-powered
            engineering solutions, and enterprise applications used by
            development and architecture teams. I enjoy working across the
            complete software development lifecycle—from understanding business
            requirements and designing software architecture to building,
            deploying, and continuously improving production-ready applications.
          </p>

          <p>
            Beyond my day-to-day work, I continuously explore modern software
            architecture, distributed systems, cloud technologies, and
            Artificial Intelligence to build reliable solutions that create
            meaningful impact for engineering teams and businesses.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-white">
                {card.title}
              </h3>

              <div className="mt-6 space-y-3">

                {card.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-500" />

                    <span className="text-zinc-400">
                      {skill}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}