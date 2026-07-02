import {
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contactInfo = [
  {
    title: "Email",
    value: "p.penchalamohan@gmail.com",
    href: "mailto:p.penchalamohan@gmail.com",
    icon: <Mail size={22} />,
  },
  {
    title: "Phone",
    value: "+91 6281443848",
    href: "tel:+916281443848",
    icon: <Phone size={22} />,
  },
  {
    title: "Location",
    value: "Chennai, India",
    href: "#",
    icon: <MapPin size={22} />,
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/penchalamohan7",
    icon: <FaGithub size={22} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/penchala-mohan-pulaparthi-9023a221a",
    icon: <FaLinkedin size={22} />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/penchala16/",
    icon: <SiLeetcode size={20} />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] font-semibold text-blue-500">
              Let's Connect
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              Interested in
              <br />
              Working Together?
            </h2>

          </div>

          <div>

            <p className="text-lg leading-9 text-zinc-400 text-justify">
              Whether you're looking to discuss enterprise software,
              full stack engineering, artificial intelligence,
              or exciting career opportunities, I'd be happy to connect.
              Feel free to reach out through any of the channels below.
            </p>

          </div>

        </div>

        {/* Content */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-5 rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-blue-500"
                >
                  <div className="text-blue-500">
                    {item.icon}
                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      {item.title}
                    </p>

                    <p className="mt-1 text-lg">
                      {item.value}
                    </p>

                  </div>

                </a>
              ))}

            </div>

          </div>

          {/* Resume & Socials */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-2xl font-semibold">
              Connect With Me
            </h3>

            <p className="mt-5 text-zinc-400 leading-8 text-justify">
              You can also explore my professional profiles, coding
              journey using the links below.
            </p>

            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download Resume
            </a> */}

            <div className="mt-10 flex gap-5">

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}