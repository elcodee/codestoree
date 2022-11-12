import CTA from "@/components/home/CTA";
import Hero from "@/components/store/Welcome/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/store/Welcome/Projects";
import Skills from "@/components/store/Welcome/Skills";
import Testimonials from "@/components/home/Testimonials";
import CardDefault from "@/components/store/Welcome/Card";
import CardsCarousel from "@/components/store/Welcome/Carousel";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      {/* <Hero /> */}
      <div className="mt-20 space-y-32">
        <CardsCarousel />
        <CardDefault />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/* <CTA /> */}
    </Page>
  );
}
