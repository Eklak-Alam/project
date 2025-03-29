import EndlessScroll from "@/components/EndlessScroll";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import OurProcess from "@/components/OurProcess";
import { SubFooter } from "@/components/SubFooter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <LandingPage />
    <EndlessScroll />
    <OurProcess />
    <Testimonials />
    <FAQs />
    <SubFooter />
    <Footer />
    </>
  );
}
