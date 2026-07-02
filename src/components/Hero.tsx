// import { ArrowDown, Download, Mail } from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const stats = [
//   {
//     value: "3+",
//     label: "Years Experience",
//   },
//   {
//     value: "300+",
//     label: "Developers Supported",
//   },
//   {
//     value: "20+",
//     label: "Enterprise APIs Delivered",
//   },
//   {
//     value: "85%",
//     label: "Reduction in Compliance Findings",
//   },
// ];

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center border-b border-zinc-800"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-28 w-full">

//         <div className="max-w-4xl">

//           <p className="text-blue-500 font-semibold tracking-widest uppercase mb-6">
//             Hi, I'm
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
//             Pulaparthi
//             <br />
//             Penchala Mohan
//           </h1>

//           <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white">
//             Full Stack Software Engineer
//           </h2>

//           <p className="mt-8 text-lg leading-9 text-zinc-400 max-w-3xl">
//             Building enterprise applications, modern web experiences, and
//             AI-driven solutions with a strong focus on scalable software
//             engineering, intelligent automation, and exceptional user
//             experiences.
//           </p>

//           <p className="mt-6 text-lg leading-9 text-zinc-400 max-w-3xl">
//             Currently working as an Associate Full Stack Engineer II at BNY,
//             where I contribute to enterprise platforms by designing responsive
//             frontend applications, developing scalable backend services,
//             building REST APIs, integrating AI-powered capabilities, and
//             delivering software that improves engineering productivity and
//             business outcomes.
//           </p>

//           <div className="mt-12 flex flex-wrap gap-4">

//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//             >
//               <Download size={20} />
//               Download Resume
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
//             >
//               Let's Connect
//             </a>

//           </div>

//           <div className="mt-10 flex items-center gap-6">

//             <a
//               href="https://github.com/penchalamohan7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-zinc-400 transition hover:text-white"
//               aria-label="GitHub"
//             >
//               <FaGithub size={26} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/penchala-mohan-pulaparthi-9023a221a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-zinc-400 transition hover:text-[#0A66C2]"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin size={26} />
//             </a>

//             <a
//               href="https://leetcode.com/u/penchala16/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-zinc-400 transition hover:text-[#FFA116]"
//               aria-label="LeetCode"
//             >
//               <SiLeetcode size={24} />
//             </a>

//             <a
//               href="mailto:p.penchalamohan@gmail.com"
//               className="text-zinc-400 transition hover:text-white"
//               aria-label="Email"
//             >
//               <Mail size={24} />
//             </a>

//           </div>

//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
//             >
//               <h3 className="text-4xl font-bold text-blue-500">
//                 {stat.value}
//               </h3>

//               <p className="mt-3 text-zinc-400 leading-7">
//                 {stat.label}
//               </p>
//             </div>
//           ))}

//         </div>

//         <div className="mt-20 flex justify-center">
//           <ArrowDown className="animate-bounce text-zinc-500" size={28} />
//         </div>

//       </div>
//     </section>
//   );
// }

import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "300+", label: "Developers Supported" },
  { value: "20+", label: "Enterprise APIs Delivered" },
  { value: "85%", label: "Reduction in Compliance Findings" },
];

const focusAreas = [
  "Enterprise Applications",
  "Frontend Development",
  "Backend Engineering",
  "AI Engineering",
  "Cloud & DevOps",
  "System Design",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-zinc-800 pt-36 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-16 lg:grid-cols-5">

          {/* LEFT */}

          <div className="lg:col-span-3">

            <p className="mt-8 text-lg text-zinc-400">
              Hi, I'm
            </p>

            <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Pulaparthi
              <br />
              Penchala Mohan
            </h1>

                {/* <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
              Full Stack Software Engineer
            </p> */}

            {/* <h2 className="mt-8 max-w-2xl text-3xl font-bold leading-tight text-zinc-100">
              Building Enterprise Applications,
              Modern Web Experiences &
              AI-Driven Solutions
            </h2> */}

            <p className="mt-8 max-w-2xl text-justify text-lg leading-9 text-zinc-400">
              Associate Full Stack Engineer II at BNY with experience
              building enterprise applications across frontend, backend,
              Artificial Intelligence, and cloud technologies. I design
              responsive web applications, develop scalable REST APIs,
              build AI-powered engineering solutions, and deliver software
              that improves engineering productivity while creating
              measurable business impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* <a
                href="public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                <Download size={20} />
                Download Resume
              </a> */}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                //className="inline-flex items-center rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-zinc-900"
              >
                Let's Connect
              </a>

            </div>

            <div className="mt-10 flex items-center gap-7">

              <a
                href="https://github.com/penchalamohan7"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/penchala-mohan-pulaparthi-9023a221a"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-[#0A66C2]"
              >
                <FaLinkedin size={25} />
              </a>

              <a
                href="https://leetcode.com/u/penchala16/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-[#FFA116]"
              >
                <SiLeetcode size={23} />
              </a>

              <a
                href="mailto:p.penchalamohan@gmail.com"
                className="text-zinc-400 transition hover:text-white"
              >
                <Mail size={24} />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-2">

            <div className="grid grid-cols-2 gap-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-[150px] flex-col justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-blue-500"
                >
                  <h3 className="text-4xl font-bold text-blue-500">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">

              <h3 className="text-xl font-semibold text-white">
                Current Focus
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}