import Header from "./components/Header";
import Hero from "./components/Hero";
import Quiz from "./components/Quiz";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Callback from "./components/Callback";
import Footer from "./components/Footer";
import { Marquee } from "./components/Marquee";
import { MobileBar } from "./components/MobileBar";
import { MARQUEE_BRANDS } from "./lib/data";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* ambient fixed background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="bg-blueprint absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.12),rgba(0,0,0,0.5))]" />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Marquee items={MARQUEE_BRANDS} />
          <Quiz />
          <Services />
          <Steps />
          <Team />
          <Reviews />
          <Callback />
        </main>
        <Footer />
        <MobileBar />
      </div>
    </div>
  );
}


