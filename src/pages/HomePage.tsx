import ApplicationBuilder from "../components/home/ApplicationBuilder";
import HeroPanel from "../components/home/HeroPanel";

export default function HomePage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <HeroPanel />
      <ApplicationBuilder />
    </div>
  );
}
