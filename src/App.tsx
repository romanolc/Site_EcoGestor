import Header from './components/Header';
import Nico from './components/Nico';
import Hero from './sections/Hero';
import { JourneySection, StorySection } from './sections/StoryJourney';
import ExperienceSwitch from './sections/ExperienceSwitch';
import { AccessibilityDemo, EcopointsDemo, ScaleDemo, TraceDemo } from './sections/Demos';
import { BusinessSection, ComparisonSection, ImpactSection, RoadmapSection } from './sections/BusinessImpactRoadmap';
import ClosingSection, { VideoSection } from './sections/VideoClosing';

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    <Header />
    <main id="main-content">
      <Hero />
      <StorySection />
      <JourneySection />
      <ExperienceSwitch />
      <div id="demonstracoes" className="demo-divider" aria-hidden="true" />
      <EcopointsDemo />
      <ScaleDemo />
      <AccessibilityDemo />
      <TraceDemo />
      <ComparisonSection />
      <ImpactSection />
      <BusinessSection />
      <RoadmapSection />
      <VideoSection />
      <ClosingSection />
    </main>
    <Nico />
  </>;
}
