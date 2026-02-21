import HeroSection from '../sections/HeroSection';
import ExecutionLeadershipSection from '../sections/ExecutionLeadershipSection';
import TechnicalFoundationSection from '../sections/TechnicalFoundationSection';
import GrowthCaseStudySection from '../sections/GrowthCaseStudySection';
import ProjectShowcaseSection from '../sections/ProjectShowcaseSection';
import ResultsProofSection from '../sections/ResultsProofSection';
import ContactSection from '../sections/ContactSection';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ExecutionLeadershipSection />
            <TechnicalFoundationSection />
            <GrowthCaseStudySection />
            <ProjectShowcaseSection />
            <ResultsProofSection />
            <ContactSection />
        </div>
    );
}
