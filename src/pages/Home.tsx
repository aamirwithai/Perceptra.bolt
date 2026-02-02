import { Helmet } from "react-helmet-async";

import Hero from '../components/Hero';
import Journey from '../components/Journey';
import AuthoritySystems from '../components/AuthoritySystems';
import WhyPerceptra from '../components/WhyPerceptra';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Perceptra | Crafting Digital Authority & Premium Web Development SEO</title>
        <meta
          name="description"
          content="Perceptra crafts digital authority through premium web development and SEO strategies designed to rank higher, convert faster, and scale businesses."
        />
        <link rel="canonical" href="https://www.perceptra.in/" />

        {/* Open Graph (optional but recommended for homepage) */}
        <meta property="og:title" content="Perceptra | Crafting Digital Authority" />
        <meta
          property="og:description"
          content="Premium web development and SEO services designed to build lasting digital authority."
        />
        <meta property="og:url" content="https://www.perceptra.in/" />
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
      <Hero />
      <Journey />
      <AuthoritySystems />
      <WhyPerceptra />
    </>
  );
}
