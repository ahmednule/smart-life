import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Smart Life",
  description: "Learn more about Smart Life, an AI-powered platform for optimizing vehicle routes and providing real-time tracking for bus and car drivers.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Discover Smart Life, an innovative AI-powered solution designed to optimize routes and provide real-time vehicle tracking for efficient travel management."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
