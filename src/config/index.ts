import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Floriana - Frontend Developer",
  author: "Floriana Sho",
  description:
    "Crafting modern websites from Tangerang, Indonesia.",
  lang: "en",
  siteLogo: "/logo_white.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/floriana-f-a51636140/" },
    { text: "Github", href: "https://github.com/Florianasho" },
    { text: "Instagram", href: "https://www.instagram.com/florianasho" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Floriana",
    specialty: "Frontend Web Developer",
    summary:
      "Crafting modern websites from Tangerang, Indonesia.",
    email: "florianasho@gmail.com",
  },
  experience: [
    {
      company: "Sirclo",
      position: "Software Engineer",
      startDate: "Nov 2022",
      endDate: "Aug 2023",
      summary: [
        "Collaborated with the Sirclo Store team to craft tailored client websites using ReactJS, Next.js, GraphQL, and SCSS for seamless, scalable solutions.",
      ],
    },
    {
      company: "Orami by Sirclo",
      position: "Software Engineer",
      startDate: "Nov 2019",
      endDate: "Nov 2022",
      summary: [
        "Worked with the B2B team to build and maintain a custom bulk marketplace and seller page platform, leveraging ReactJS, Redux, Next.js, and SCSS for a scalable user experience.",
      ],
    },
    {
      company: "Onero Solutions",
      position: "Lead Frontend Developer",
      startDate: "Jan 2018",
      endDate: "Nov 2019",
      summary:
        "Built responsive web and mobile interfaces while collaborating with UI/UX Designers for usability. Led the Frontend team in tool selection and troubleshooting, using Vue.js, Quasar, JavaScript, PHP, and CodeIgniter.",
    },
    {
      company: "Luminov",
      position: "Web Developer",
      startDate: "Sep 2017",
      endDate: "Jan 2018",
      summary:
        "Built custom client websites at Luminov using HTML, CSS, and CodeIgniter, turning Photoshop designs into responsive digital experiences.",
    },
  ],
  projects: [
    {
      name: "Cherish Academy",
      summary: "Crafted a modern, user-friendly website for Cherish Academy that brings everything—from admissions to academics and careers—into one seamless experience.",
      linkPreview: "/",
      linkSource: "https://cherishacademy.sch.id",
      image: "/cherish-academy.png",
    },
    {
      name: "Cherish International Publisher",
      summary: "Developed an educational website for PT Cherish International, showcasing inclusive books for early learners and children with special needs.",
      linkPreview: "/",
      linkSource: "https://cherishintlpublisher.com",
      image: "/cherish-publisher.png",
    },
    {
      name: "PT Aneka Kaoline Utama",
      summary: "Designed a professional and easy-to-navigate profile site for PT Aneka Kaoline Utama, complete with product showcases, corporate info, and latest company news.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/aneka-kaoline.png",
    },
    {
      name: "Mata Investments",
      summary: "Crafted a modern and minimalist digital presence for Mata Investments — a company profile website that communicates their vision, portfolio, and strategy with clarity and elegance.",
      linkPreview: "/",
      linkSource: "https://matainvestments.co",
      image: "/mata-investments.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Floriana — a Frontend Web Developer with experience in building modern web applications using React.js, Next.js, Vue.js, GraphQL, Tailwind, TypeScript, and CodeIgniter.

      I hold a Bachelor’s degree in Computer Science from Binus University and enjoy crafting clean, user-focused interfaces.
    `,
    image: "/picture01.png",
  },
};
