import EndlessScroll from "@/components/EndlessScroll";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import OurProcess from "@/components/OurProcess";
import { OurServices } from "@/components/OurService";
import { SubFooter } from "@/components/SubFooter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-950">
    <LandingPage />
    <EndlessScroll />
    <OurProcess />
    <OurServices />
    <Testimonials />
    <FAQs />
    <SubFooter />
    <Footer />
    </div>
    </>
  );
}
