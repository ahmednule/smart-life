import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Smart Life",
  description: "Get in touch with the Smart Life team for support, inquiries, and feedback.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Reach out to the Smart Life team for any questions, support, or feedback regarding our AI-powered vehicle tracking and route optimization solutions."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
