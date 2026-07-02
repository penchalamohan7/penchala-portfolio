interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    icon: "🏆",
    title: "Hackcelerator AI Hackathon",
    subtitle: "Enterprise AI Innovation",
    description:
      "Built 'Chat with Swagger', an AI-powered Solution Architect Assistant using Mistral LLM, ReAct prompting, and enterprise integrations to simplify API governance and architecture reviews.",
  },
  {
    icon: "☁️",
    title: "Microsoft Azure Administrator Associate",
    subtitle: "Microsoft Certified",
    description:
      "Certified in deploying, managing, monitoring, and securing cloud infrastructure and enterprise workloads on Microsoft Azure.",
  },
  {
    icon: "☁️",
    title: "AWS Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description:
      "Validated understanding of cloud computing fundamentals, AWS core services, security, pricing, and architectural best practices.",
  },
  {
    icon: "🛡️",
    title: "Secure Code Warrior",
    subtitle: "Company Tournament",
    description:
      "Recognized among the Top 20 participants while solving secure coding challenges focused on identifying and preventing software vulnerabilities.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-zinc-800 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Achievements
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Certifications & Milestones
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-400 text-justify">
          Continuous learning and innovation have always been an important
          part of my engineering journey. From building AI-powered solutions
          during hackathons to earning cloud certifications and participating
          in secure coding competitions, I actively invest in expanding my
          technical expertise beyond day-to-day project work.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-blue-500">
                {item.subtitle}
              </p>

              <p className="mt-6 leading-8 text-zinc-400 text-justify">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}