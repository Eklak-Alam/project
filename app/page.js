import FAQs from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import NumberOfPeopleUse from "@/components/NumberOfPeopleUse";
import OurProcess from "@/components/OurProcess";
import { OurServices } from "@/components/OurService";
import { SubFooter } from "@/components/SubFooter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-bl from-red-900 via-black to-black">
    <LandingPage />
    <OurProcess />
    <OurServices />
    <NumberOfPeopleUse />
    <Testimonials />
    <FAQs />
    <SubFooter />
    <Footer />
    </div>
    </>
  );
}
