const experiences = [
  {
    company: "BNY",
    role: "Associate Full Stack Engineer II",
    duration: "Jan 2023 – Present",
    location: "Chennai, India",
    tech: [
      "Angular",
      "React",
      "FastAPI",
      "Kotlin",
      "MongoDB",
      "Docker",
      "AI",
    ],
    achievements: [
      "Delivered enterprise platforms supporting 300+ developers and an Architecture Dashboard used by 20+ Solution Architects.",
      "Designed and developed 20+ REST APIs for API governance, metadata management, and enterprise workflow automation.",
      "Built end-to-end features across Angular, React, FastAPI, and Kotlin, delivering responsive UI and scalable backend services.",
      "Developed an AI-powered Solution Architect Assistant using Mistral LLM, ReAct prompting, and JIRA integrations.",
      "Reduced architecture compliance findings from 2500 to 400 by delivering automated remediation guidance.",
      "Migrated enterprise workflows from Activiti BPM to Camunda BPM and contributed to backend architecture discussions.",
      "Containerized applications using Docker and supported CI/CD pipelines for reliable deployments.",
    ],
  },
  {
    company: "Samsung R&D Institute India",
    role: "Research Developer Intern",
    duration: "Jun 2021 – Feb 2022",
    location: "Bengaluru (Remote)",
    tech: [
      "Python",
      "Deep Learning",
      "IBCLN",
      "Computer Vision",
    ],
    achievements: [
      "Developed deep learning solutions for reflection removal using the IBCLN architecture.",
      "Built Python pipelines for image preprocessing, model training, and evaluation.",
      "Processed and prepared datasets containing more than 4000 images.",
      "Collaborated with research engineers to improve model accuracy and overall performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-zinc-800 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">
          Experience
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Professional Journey
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-400 text-justify">
          My professional experience spans enterprise software engineering,
          AI-driven solutions, workflow automation, and full stack application
          development. I have worked on large-scale internal platforms,
          intelligent engineering solutions, and research-oriented AI systems,
          contributing across frontend, backend, cloud, and artificial
          intelligence.
        </p>

        <div className="mt-16 space-y-10">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-blue-500"
            >

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h3 className="text-3xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="mt-2 text-xl text-blue-500">
                    {exp.role}
                  </p>

                  <p className="mt-2 text-zinc-400">
                    {exp.duration} • {exp.location}
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="mt-8 grid gap-4">

                {exp.achievements.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4"
                  >
                    <div className="mt-3 h-2 w-2 rounded-full bg-blue-500" />

                    <p className="leading-8 text-zinc-400 text-justify">
                      {item}
                    </p>

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

