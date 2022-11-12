type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Diamond Promo",
    icon: "https://cdn.apkboat.com/logos/mobile-legends-bang-bang-mod-radar-hack-diamonds.jpg",
    style: { width: 70, height: 70 },
  },
  {
    title: "Diamond Fast",
    icon: "https://cdn.apkboat.com/logos/mobile-legends-bang-bang-mod-radar-hack-diamonds.jpg",
    style: { width: 70, height: 70 },
  },
  {
    title: "Diamond Semi Fast",
    icon: "https://cdn.apkboat.com/logos/mobile-legends-bang-bang-mod-radar-hack-diamonds.jpg",
    style: { width: 70, height: 70 },
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
