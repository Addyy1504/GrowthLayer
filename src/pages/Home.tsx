import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import WhyDifferent from "../components/WhyDifferent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* 🧭 SEO Meta Tags for Home Page */}
      <Helmet>
        <title>GrowthLayer Studio | Creative Agency for Strategy, Web & Automation</title>
        <meta
          name="description"
          content="GrowthLayer Studio is a creative agency building digital-first brands through strategy, design, and automation. We craft unforgettable digital experiences for brands that want to grow fast."
        />
        <meta
          name="keywords"
          content="GrowthLayer Studio, creative agency, digital marketing agency India, website design, automation agency, UGC content, n8n automation, branding, growth marketing, Delhi"
        />
        <link rel="canonical" href="https://growthlayer.studio/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GrowthLayer Studio | Creative Agency for Strategy, Web & Automation"
        />
        <meta
          property="og:description"
          content="We help ambitious brands grow through bold creative, powerful websites, and automation that scales your business."
        />
        <meta property="og:url" content="https://growthlayer.studio/" />
        <meta property="og:image" content="https://growthlayer.studio/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GrowthLayer Studio | Creative Agency for Strategy, Web & Automation"
        />
        <meta
          name="twitter:description"
          content="We help ambitious brands grow through bold creative, powerful websites, and automation that scales your business."
        />
        <meta name="twitter:image" content="https://growthlayer.studio/og-image.png" />

        {/* Extra */}
        <meta name="author" content="GrowthLayer Studio" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3EF4E4" />
      </Helmet>

      {/* 🏡 Page Components */}
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <WhyDifferent />
      <Contact />
      <Footer />
    </>
  );
}
