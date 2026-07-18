import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FestivalBanner from "@/components/FestivalBanner";
import MissionStrip from "@/components/MissionStrip";
import PackagesTeaser from "@/components/PackagesTeaser";
import Corporate from "@/components/Corporate";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function HomePage() {
  return (
    <SplashScreen>
      <main className="bg-ink text-ivory overflow-x-hidden">
        <Nav />
        <Hero />
        <FestivalBanner />
        <MissionStrip />
        <PackagesTeaser />
        <Corporate />
        <Testimonials />
        <VideoSection />
        <Blog />
        <FAQ />
        <Footer />
      </main>
    </SplashScreen>
  );
}
