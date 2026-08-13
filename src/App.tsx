import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { StudyJourney } from "./sections/StudyJourney";
import { Features } from "./sections/Features";
import { OfflineFirst } from "./sections/OfflineFirst";
import { Download } from "./sections/Download";
import { BetaTesting } from "./sections/BetaTesting";
import { FAQ } from "./sections/FAQ";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0d14] text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <StudyJourney />
        <Features />
        <OfflineFirst />
        <Download />
        <BetaTesting />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
