import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Starter | Rp 40.000",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/ntflx.webp",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["Support All Device", "Masa Aktif 1 Bulan", "1x Garansi OnHold", "HD"],
    best_sell: false
  },
  {
    id: 1,
    title: "Middle | Rp 75.000",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/ntflx.webp",
    link: "https://buildfaster.co/",
    tags: ["Support All Device", "Masa Aktif 2 Bulan", "3x Garansi OnHold", "Ultra HD"],
    best_sell: true
  },
  {
    id: 2,
    title: "Gold | Rp 100.000",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/ntflx.webp",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["Support All Device", "Masa Aktif 3 Bulan", "5x Garansi OnHold", "Ultra HD"],
    best_sell: false
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects