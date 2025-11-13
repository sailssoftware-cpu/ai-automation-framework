import React from 'react';
import SectionWrapper from './components/SectionWrapper';
import IconBox from './components/IconBox';
import AchievementCard from './components/AchievementCard';
import StepCard from './components/StepCard';
import FlowDiagram from './components/FlowDiagram';
import BenefitCard from './components/BenefitCard';
import CodeAssistant from './components/CodeAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Removed Header component */}

      <section className="mb-8 sm:mb-12">
        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '50.0000%',
          paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
          borderRadius: '8px', willChange: 'transform' }}>
          <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
            src="https://www.canva.com/design/DAG4kS4nCSw/mpLNQ5sGT7_IDGV9t1FVBA/view?embed" allowFullScreen={true} allow="fullscreen"
            title="AI Automation Frameworks Presentation">
          </iframe>
        </div>
      </section>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.1" />
              <path d="M32 16L36 28H48L38 36L42 48L32 40L22 48L26 36L16 28H28L32 16Z" fill="var(--primary-action-color)" />
            </svg>
          }
          title="Introduction: The Journey Begins"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-4">
          When I started exploring how to leverage AI models for developing robust test automation frameworks, I had a vision: dramatically reduce development time without compromising code quality. What began as an experiment with GitHub Copilot and Claude Sonnet 4 evolved into a comprehensive strategy that transformed how our team approaches automation framework development. Today, I'm excited to share what we achieved and how you can replicate this success.
        </p>
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed">
          The integration of AI-powered tools into our development workflow wasn't just about writing code faster—it fundamentally changed how we think about architecture, quality, and scalability. Let me walk you through our journey, the metrics that matter, and why this approach is now standard practice in our organization.
        </p>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--secondary-action-color)" opacity="0.1" />
              <path d="M32 20L34 30H42L36 35L38 45L32 40L26 45L28 35L22 30H30L32 20Z" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
              <line x1="28" y1="28" x2="36" y2="36" stroke="var(--secondary-action-color)" strokeWidth="2" />
            </svg>
          }
          title="The Challenge: The Traditional Approach"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-6">
          Before embracing AI-assisted development, our team followed the conventional path:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="var(--secondary-action-color)" opacity="0.2" />
              <path d="M12 8V12M12 16H12.01" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-lg text-[var(--text-color)]">3-4 weeks to design and set up a basic automation framework</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="var(--secondary-action-color)" opacity="0.2" />
              <path d="M12 8V12M12 16H12.01" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-lg text-[var(--text-color)]">Countless back-and-forth discussions about architecture decisions</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="var(--secondary-action-color)" opacity="0.2" />
              <path d="M12 8V12M12 16H12.01" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-lg text-[var(--text-color)]">Inconsistent code patterns across different team members' contributions</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="var(--secondary-action-color)" opacity="0.2" />
              <path d="M12 8V12M12 16H12.01" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-lg text-[var(--text-color)]">Limited time for optimization and best practice implementation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="var(--secondary-action-color)" opacity="0.2" />
              <path d="M12 8V12M12 16H12.01" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-lg text-[var(--text-color)]">High onboarding friction for new team members</span>
          </li>
        </ul>
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed">
          The bottlenecks were real. Framework architects spent excessive time answering clarification questions. Developers struggled with inconsistency. Code reviews revealed repeated issues that could have been prevented with better structure from the start.
        </p>
      </SectionWrapper>

      <SectionWrapper variant="primary-accent">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.1" />
              <path d="M32 16V32L44 38" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="32" cy="32" r="18" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            </svg>
          }
          title="The Turning Point: Structured AI-Assisted Development"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed">
          Everything changed when we adopted a documentation-driven approach with AI assistance. Instead of starting from scratch and iterating endlessly, we created comprehensive framework specifications upfront and fed them to Gemini models. The results were immediate and dramatic.
        </p>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.1" />
              <path d="M32 48L32 20M32 20L24 28M32 20L40 28" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 38L32 26L44 38" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          title="Achievement #1: 70% Reduction in Development Time"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-6">
          By providing Gemini with detailed specifications including architecture overview, coding standards, and folder structure, we eliminated ambiguity from the start. What previously took 3-4 weeks now takes 5-7 business days.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <AchievementCard
            title="What We Did:"
            content={[
              'Created a structured markdown specification document',
              'Defined all coding standards and design patterns upfront',
              'Included complete folder structure and naming conventions',
              'Documented integration requirements and expected outcomes',
            ]}
            type="did"
          />
          <AchievementCard
            title="What We Gained:"
            content={[
              'Pre-defined structure eliminated constant back-and-forth',
              'AI understood the complete framework vision immediately',
              'Iteration cycles reduced from 15-20 rounds to 4-5 rounds',
              'New developers could understand the entire architecture from documentation alone',
            ]}
            type="gained"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--secondary-action-color)" opacity="0.1" />
              <path d="M32 16L38 26L50 28L41 37L43 49L32 43L21 49L23 37L14 28L26 26L32 16Z" fill="var(--secondary-action-color)" />
            </svg>
          }
          title="Achievement #2: Superior Code Quality and Robustness"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed">
          This is where Gemini Pro genuinely impressed us. The quality of generated code went far beyond what we'd seen with other tools. Advanced error handling, proper SOLID principle implementation, and comprehensive documentation weren't afterthoughts—they were built in from day one.
        </p>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.1" />
              <circle cx="32" cy="32" r="4" fill="var(--primary-action-color)" />
              <circle cx="32" cy="32" r="12" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="32" cy="32" r="20" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            </svg>
          }
          title="Achievement #3: 100% Code Consistency Across Teams"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-6">
          Before AI assistance, different team members wrote utilities and test cases with varying patterns. Code reviews became sessions of enforcing standards. With AI-assisted development using detailed specifications, consistency became automatic.
        </p>
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
          <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-color)] mb-3">The Impact:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 10M8 10L16 10M8 10L8 4M8 10L8 16" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm sm:text-base text-[var(--text-color)]">Zero debates about naming conventions or folder structure</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 10M8 10L16 10M8 10L8 4M8 10L8 16" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm sm:text-base text-[var(--text-color)]">New code followed established patterns without exception</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 10M8 10L16 10M8 10L8 4M8 10L8 16" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm sm:text-base text-[var(--text-color)]">Code reviews shifted from style corrections to logic validation</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 10M8 10L16 10M8 10L8 4M8 10L8 16" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm sm:text-base text-[var(--text-color)]">Onboarding time for new developers dropped from 2 weeks to 3-4 days</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="var(--secondary-action-color)" opacity="0.1" />
              <circle cx="28" cy="28" r="12" stroke="var(--secondary-action-color)" strokeWidth="3" fill="none" />
              <path d="M37 37L46 46" stroke="var(--secondary-action-color)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          }
          title="Achievement #4: Intelligent Problem Resolution"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-4">
          Complex debugging scenarios that previously consumed days were resolved in hours. Gemini Pro's capability to analyze multi-layered issues and provide multiple solution approaches proved invaluable.
        </p>
        <p className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed mb-6">
          Real Scenario: When we encountered intermittent test failures related to dynamic element rendering, Gemini didn't just suggest a quick fix. It:
        </p>
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--text-color)] font-bold mt-1 flex-shrink-0">1.</span>
              <span className="text-sm sm:text-base text-[var(--text-color)]">
                <strong>Identified the root cause</strong> (race condition between DOM updates and element selection)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--text-color)] font-bold mt-1 flex-shrink-0">2.</span>
              <span className="text-sm sm:text-base text-[var(--text-color)]">
                <strong>Proposed three different solution approaches</strong> with trade-offs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--text-color)] font-bold mt-1 flex-shrink-0">3.</span>
              <span className="text-sm sm:text-base text-[var(--text-color)]">
                <strong>Explained why each approach</strong> was better for specific scenarios
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--text-color)] font-bold mt-1 flex-shrink-0">4.</span>
              <span className="text-sm sm:text-base text-[var(--text-color)]">
                <strong>Recommended the best solution</strong> for our particular use case (explicit waits with custom conditions)
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="emerald">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          Real-World Use Cases: How We're Using This Daily
        </h2>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="16" width="40" height="36" rx="2" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <path d="M20 16V12C20 10 22 8 24 8H40C42 8 44 10 44 12V16" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="24" cy="32" r="2" fill="var(--primary-action-color)" />
              <circle cx="32" cy="32" r="2" fill="var(--primary-action-color)" />
              <circle cx="40" cy="32" r="2" fill="var(--primary-action-color)" />
            </svg>
          }
          title="Use Case 1: Building a Scalable E-Commerce Test Suite"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-2">Challenge:</h4>
          <p className="text-lg text-[var(--text-color)]">
            Create a comprehensive automation framework for an e-commerce platform supporting 50+ test
            scenarios across multiple browsers and environments.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6">
          <p className="text-[var(--text-color)]">
            <strong>Traditional Approach Timeline:</strong> <span className="text-[var(--text-color)] font-bold">6-8 weeks</span>
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">Our AI-Assisted Approach:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span className="font-bold text-[var(--primary-action-color)] min-w-[80px]">Week 1:</span>
              <span className="text-[var(--text-color)]">
                Documented complete framework specification with architecture, standards, and structure
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span className="font-bold text-[var(--primary-action-color)] min-w-[80px]">Week 1-2:</span>
              <span className="text-[var(--text-color)]">
                Used Gemini Pro to generate base classes, page object models, and configuration management
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span className="font-bold text-[var(--primary-action-color)] min-w-[80px]">Week 2-3:</span>
              <span className="text-[var(--text-color)]">
                Used alternative models for test case generation and data providers
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span className="font-bold text-[var(--primary-action-color)] min-w-[80px]">Week 3:</span>
              <span className="text-[var(--text-color)]">
                Used Gemini Flash for optimization and performance tuning
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">Results:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Timeline:</strong> 3.5 weeks (56% faster)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Code Quality:</strong> Zero critical issues in review, 3 minor improvements
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Team Productivity:</strong> One developer completed what previously required 1.5 developers
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Maintainability Score:</strong> 95/100 (up from typical 75/100)
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 24L48 16L52 20L44 28L40 24Z" fill="var(--primary-action-color)" />
              <rect x="16" y="32" width="24" height="8" rx="2" transform="rotate(-45 28 40)" fill="var(--secondary-action-color)" />
              <circle cx="20" cy="44" r="4" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            </svg>
          }
          title="Use Case 2: Resolving Complex Flaky Tests"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-2">Challenge:</h4>
          <p className="text-lg text-[var(--text-color)]">
            15% of tests were intermittently failing due to race conditions and timing issues.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">What We Did:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">1.</span>
                <span className="text-[var(--text-color)]">Uploaded our entire test framework to Gemini Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">2.</span>
                <span className="text-[var(--text-color)]">Described specific failure patterns and timing inconsistencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">3.</span>
                <span className="text-[var(--text-color)]">Asked for root cause analysis and comprehensive solutions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">What We Got:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">✓</span>
                <span className="text-[var(--text-color)]">Identified 3 core timing-related issues we hadn't noticed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">✓</span>
                <span className="text-[var(--text-color)]">Provided intelligent wait strategies replacing Thread.sleep() calls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">✓</span>
                <span className="text-[var(--text-color)]">Suggested framework-level improvements for better stability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] mt-1">✓</span>
                <span className="text-[var(--text-color)]">Included code examples ready to implement</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">Results:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Test Stability:</strong> 99.2% pass rate (up from 85%)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Time Saved:</strong> 40 hours of manual debugging avoided
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Framework Improvement:</strong> Systematic solution preventing similar issues
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="8" width="28" height="48" rx="4" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <rect x="22" y="14" width="20" height="32" rx="1" fill="var(--secondary-action-color)" opacity="0.2" />
              <circle cx="32" cy="50" r="2" fill="var(--primary-action-color)" />
              <line x1="26" y1="11" x2="38" y2="11" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          }
          title="Use Case 3: Rapid Framework Scaling"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-2">Challenge:</h4>
          <p className="text-lg text-[var(--text-color)]">
            Extend existing framework to support API testing and mobile testing, maintaining consistency.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">Our Approach:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
              <span className="text-[var(--primary-action-color)] font-bold">→</span>
              <span className="text-[var(--text-color)]">Created specifications for new test layers</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
              <span className="text-[var(--primary-action-color)] font-bold">→</span>
              <span className="text-[var(--text-color)]">Provided Gemini with existing framework structure</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
              <span className="text-[var(--primary-action-color)] font-bold">→</span>
              <span className="text-[var(--text-color)]">Used Gemini Pro's context capabilities to understand evolution</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
              <span className="text-[var(--primary-action-color)] font-bold">→</span>
              <span className="text-[var(--text-color)]">Generated new modules maintaining consistency with existing patterns</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">Results:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Development Time:</strong> 2 weeks (vs. estimated 4-5 weeks)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Consistency:</strong> 99% pattern alignment with existing code
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--text-color)] font-bold">✓</span>
              <span className="text-[var(--text-color)]">
                <strong>Knowledge Transfer:</strong> Reduced onboarding time for team members
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="yellow">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          The Strategic Implementation: Our Winning Formula
        </h2>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="8" width="32" height="48" rx="2" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <line x1="24" y1="20" x2="40" y2="20" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              <line x1="24" y1="28" x2="40" y2="28" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              <line x1="24" y1="36" x2="36" y2="36" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              <rect x="12" y="4" width="8" height="12" rx="1" fill="var(--primary-action-color)" />
            </svg>
          }
          title="Phase 1: Foundation with Documentation"
          textColorClass="text-[var(--text-color)]"
        />
        <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
          We spend quality time upfront creating comprehensive specifications. This isn't busy
          work—it's the cornerstone of AI-assisted success.
        </p>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h4 className="text-xl font-semibold text-[var(--text-color)] mb-3">What Goes In:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-color)] mt-1">▸</span>
              <span className="text-[var(--text-color)]">Architecture overview and component relationships</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-color)] mt-1">▸</span>
              <span className="text-[var(--text-color)]">Coding standards and naming conventions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-color)] mt-1">▸</span>
              <span className="text-[var(--text-color)]">Design patterns to follow</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-color)] mt-1">▸</span>
              <span className="text-[var(--text-color)]">Complete folder structure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-color)] mt-1">▸</span>
              <span className="text-[var(--text-color)]">Configuration and integration requirements</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="24" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="32" cy="32" r="16" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="32" cy="32" r="8" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="32" cy="32" r="3" fill="var(--secondary-action-color)" />
            </svg>
          }
          title="Phase 2: Smart Model Selection"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <span className="text-[var(--text-color)] font-bold">→</span>
            <span className="text-[var(--text-color)]">
              <strong>Gemini Flash or Pro:</strong> Framework setup, complex issues, architecture
            </span>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <span className="text-[var(--text-color)] font-bold">→</span>
            <span className="text-[var(--text-color)]">
              <strong>Gemini Opus:</strong> Enterprise-scale decisions and major refactoring
            </span>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <span className="text-[var(--text-color)] font-bold">→</span>
            <span className="text-[var(--text-color)]">
              <strong>Alternative Models:</strong> Routine test development, simple utilities
            </span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 12C20 12 10 22 10 34C10 46 20 56 32 56" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" />
              <path d="M32 12C44 12 54 22 54 34C54 46 44 56 32 56" stroke="var(--secondary-action-color)" strokeWidth="3" strokeLinecap="round" />
              <path d="M32 8L28 12L32 16" fill="var(--primary-action-color)" />
              <path d="M32 56L36 52L32 48" fill="var(--secondary-action-color)" />
            </svg>
          }
          title="Phase 3: Iterative Enhancement"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--text-color)] font-bold text-xl">1</span>
            <span className="text-[var(--text-color)]">Generate initial implementations</span>
          </div>
          <div className="flex items-center gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--text-color)] font-bold text-xl">2</span>
            <span className="text-[var(--text-color)]">Review and validate</span>
          </div>
          <div className="flex items-center gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--text-color)] font-bold text-xl">3</span>
            <span className="text-[var(--text-color)]">Optimize with Gemini Flash for performance</span>
          </div>
          <div className="flex items-center gap-3 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--text-color)] font-bold text-xl">4</span>
            <span className="text-[var(--text-color)]">Conduct comprehensive reviews</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <IconBox
          icon={
            <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 52L20 40L28 44L36 28L44 36L52 16" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="40" r="3" fill="var(--secondary-action-color)" />
              <circle cx="28" cy="44" r="3" fill="var(--secondary-action-color)" />
              <circle cx="36" cy="28" r="3" fill="var(--secondary-action-color)" />
              <circle cx="44" cy="36" r="3" fill="var(--secondary-action-color)" />
              <circle cx="52" cy="16" r="3" fill="var(--primary-action-color)" />
            </svg>
          }
          title="Phase 4: Continuous Improvement"
          textColorClass="text-[var(--text-color)]"
        />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--primary-action-color)] mt-1">✦</span>
            <span className="text-[var(--text-color)]">Regular code reviews with AI insights</span>
          </div>
          <div className="flex items-start gap-2 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--primary-action-color)] mt-1">✦</span>
            <span className="text-[var(--text-color)]">Performance optimization cycles</span>
          </div>
          <div className="flex items-start gap-2 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--primary-action-color)] mt-1">✦</span>
            <span className="text-[var(--text-color)]">Documentation updates</span>
          </div>
          <div className="flex items-start gap-2 bg-[var(--surface-color)] p-4 rounded-lg">
            <span className="text-[var(--primary-action-color)] mt-1">✦</span>
            <span className="text-[var(--text-color)]">Pattern evolution based on new requirements</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white-surface">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          The Numbers: Quantifiable Business Impact
        </h2>
        <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
          Here's what our adoption of AI-assisted framework development delivered:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr style={{ background: 'linear-gradient(to right, var(--primary-action-color)15, var(--secondary-action-color)15)' }}>
                <th className="text-left p-4 font-semibold text-[var(--text-color)] border border-slate-300">Metric</th>
                <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Before</th>
                <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">After</th>
                <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Framework Setup Time</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">3-4 weeks</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">5-7 days</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">70% reduction</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Code Quality Score</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">75/100</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">94/100</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">25% improvement</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Test Flakiness</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">12-15%</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">0.8%</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">94% reduction</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Code Review Cycles</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">6-8 rounds</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">2-3 rounds</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">65% fewer rounds</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Onboarding Time</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">2 weeks</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">3-4 days</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">75% faster</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Development Team Capacity</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">2 developers</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">1.2 developers</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">40% efficiency gain</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Documentation Quality</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">Incomplete</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">Comprehensive</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">100% coverage</td>
              </tr>
              <tr className="hover:bg-[var(--surface-color)]">
                <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">Bug Detection Rate</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--text-color)] font-semibold">Late stage</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-semibold">Early stage</td>
                <td className="p-4 text-center border border-slate-300 text-[var(--primary-action-color)] font-bold">Earlier in cycle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="violet">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          Beyond Code Generation: The Broader Benefits
        </h2>
      </SectionWrapper>

      <BenefitCard
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="12" width="32" height="40" rx="2" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            <path d="M32 12V52" stroke="var(--secondary-action-color)" strokeWidth="2" />
            <line x1="22" y1="22" x2="28" y2="22" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="28" x2="28" y2="28" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="22" x2="42" y2="22" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="28" x2="42" y2="28" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="1. Knowledge Repository"
        description="Our documentation becomes a living knowledge base. New team members learn framework patterns from comprehensive specs rather than fragmented wikis."
      />

      <BenefitCard
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="24" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            <path d="M20 32L28 40L44 24" stroke="var(--secondary-action-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="2. Quality Assurance"
        description="AI-generated code inherently follows best practices, shifting quality assurance focus from basic standards compliance to architectural validation."
      />

      <BenefitCard
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="36" rx="16" ry="12" fill="var(--secondary-action-color)" opacity="0.3" />
            <circle cx="32" cy="24" r="10" fill="var(--primary-action-color)" opacity="0.5" />
            <circle cx="26" cy="22" r="2" fill="var(--secondary-action-color)" />
            <circle cx="38" cy="22" r="2" fill="var(--secondary-action-color)" />
            <line x1="16" y1="32" x2="22" y2="36" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
            <line x1="48" y1="32" x2="42" y2="36" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="3. Faster Debugging"
        description="Instead of endless troubleshooting, we get systematic analysis and multiple solution approaches from advanced models."
      />

      <BenefitCard
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="36" width="12" height="16" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
            <rect x="26" y="28" width="12" height="24" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            <rect x="40" y="20" width="12" height="32" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
            <line x1="8" y1="52" x2="56" y2="52" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="4. Architectural Clarity"
        description="Detailed specifications force clear thinking about architecture before coding begins, preventing design issues that are expensive to fix later."
      />

      <BenefitCard
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="20" r="8" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            <circle cx="40" cy="20" r="8" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
            <path d="M16 44C16 36 20 32 24 32C28 32 32 36 32 44" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
            <path d="M32 44C32 36 36 32 40 32C44 32 48 36 48 44" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
          </svg>
        }
        title="5. Team Alignment"
        description="Everyone works from the same specifications and standards, eliminating inconsistencies that plague distributed teams."
      />

      <SectionWrapper variant="yellow">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-6">
          Lessons Learned: What Really Works
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
                <path d="M10 16L14 20L22 12" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-xl font-bold text-[var(--text-color)]">What Worked Brilliantly</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✓</span>
                <span className="text-[var(--text-color)]">
                  <strong>Start with documentation:</strong> Spending time upfront saves exponential time later
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✓</span>
                <span className="text-[var(--text-color)]">
                  <strong>Use the right model for the job:</strong> Gemini Flash for speed, Pro for complexity, Opus for enterprise scale
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✓</span>
                <span className="text-[var(--text-color)]">
                  <strong>Maintain iterative approach:</strong> Generate, review, refine—don't expect perfection immediately
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✓</span>
                <span className="text-[var(--text-color)]">
                  <strong>Leverage context:</strong> Deep context window for maintaining conversation history across sessions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✓</span>
                <span className="text-[var(--text-color)]">
                  <strong>Continuous learning:</strong> New team members learn faster from comprehensive specs
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
                <line x1="11" y1="11" x2="21" y2="21" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="11" x2="11" y2="21" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-xl font-bold text-[var(--text-color)]">What We Avoided</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✗</span>
                <span className="text-[var(--text-color)]">
                  <strong>Expecting perfection:</strong> AI generates excellent code but still needs validation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✗</span>
                <span className="text-[var(--text-color)]">
                  <strong>Using one model for everything:</strong> Different phases need different tools
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✗</span>
                <span className="text-[var(--text-color)]">
                  <strong>Skipping documentation:</strong> Tempting to code immediately, but specifications save time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✗</span>
                <span className="text-[var(--text-color)]">
                  <strong>Ignoring code reviews:</strong> AI-generated code needs validation before production
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-color)] font-bold mt-1">✗</span>
                <span className="text-[var(--text-color)]">
                  <strong>Stagnant specifications:</strong> Documentation evolves with the project
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="primary-accent">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          The Future: Where This Is Heading
        </h2>
        <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
          The trajectory is clear. As Gemini models continue evolving—from Flash to Pro to
          Opus—the capabilities expand:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <path d="M12 6V12L16 14" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-color)] mb-1">Better context understanding:</h4>
              <p className="text-[var(--text-color)]">Managing larger, more complex frameworks</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L8 12H12L10 20L18 10H13L15 4H12Z" fill="var(--secondary-action-color)" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-color)] mb-1">Faster iterations:</h4>
              <p className="text-[var(--text-color)]">Quicker response times enable more rapid development cycles</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="9" cy="10" r="1.5" fill="var(--secondary-action-color)" />
              <circle cx="15" cy="10" r="1.5" fill="var(--secondary-action-color)" />
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-color)] mb-1">Deeper analysis:</h4>
              <p className="text-[var(--text-color)]">Superior problem-solving for increasingly complex scenarios</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="12" r="3" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="18" cy="12" r="3" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <line x1="9" y1="12" x2="15" y2="12" stroke="var(--secondary-action-color)" strokeWidth="2" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-color)] mb-1">Seamless integration:</h4>
              <p className="text-[var(--text-color)]">Tighter IDE integration and MCP capabilities</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="2" fill="var(--secondary-action-color)" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="var(--primary-action-color)" strokeWidth="2" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="var(--primary-action-color)" strokeWidth="2" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="var(--primary-action-color)" strokeWidth="2" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="var(--primary-action-color)" strokeWidth="2" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-color)] mb-1">Predictive optimization:</h4>
              <p className="text-[var(--text-color)]">AI identifying potential issues before they occur</p>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-[var(--text-color)] text-lg font-medium">
            Our investment in AI-assisted development isn't just about today's efficiency—it's preparing for tomorrow's capabilities.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="emerald">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">
          Getting Started: Your Action Plan
        </h2>
        <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
          If you're considering AI-assisted framework development, here's how to start:
        </p>
        <div className="space-y-6">
          <StepCard
            stepNumber={1}
            title="Document Your Framework Design"
            description="Create a comprehensive specification including architecture, standards, and structure. This is your investment in future efficiency."
          />
          <StepCard
            stepNumber={2}
            title="Choose Your Primary Model"
            description="For initial setup and complex problems, use Gemini Flash or Pro. For enterprise-scale frameworks, consider Gemini Opus."
          />
          <StepCard
            stepNumber={3}
            title="Generate and Validate"
            description="Have AI generate components, but always review and test. The goal is collaboration, not blind trust."
          />
          <StepCard
            stepNumber={4}
            title="Iterate and Optimize"
            description="Use Gemini Flash's speed for iterative improvements. Refactor with performance in mind."
          />
          <StepCard
            stepNumber={5}
            title="Scale Your Team"
            description="Document your process so other team members can replicate this success consistently."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="secondary-accent">
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-6">
          End-to-End Test Automation Flow
        </h2>
        <p className="text-lg text-[var(--text-color)] leading-relaxed mb-8">
          From Development to Reporting with AI-Powered Automation Framework
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 1: Test Development</h4>
            <p className="text-sm text-[var(--text-color)]">Feature files, step definitions, and page object models</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 2: Configuration & Setup</h4>
            <p className="text-sm text-[var(--text-color)]">Environment configuration and browser setup</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 3: Test Execution</h4>
            <p className="text-sm text-[var(--text-color)]">Parallel test execution with Cucumber & Playwright</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 4: Report Generation</h4>
            <p className="text-sm text-[var(--text-color)]">Cucumber messages conversion to HTML reports</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 5: Xray Upload</h4>
            <p className="text-sm text-[var(--text-color)]">Clean data and upload to Xray Cloud API</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-[var(--text-color)] mb-2">Phase 6: Jira/Xray Integration</h4>
            <p className="text-sm text-[var(--text-color)]">Test execution tracking and traceability</p>
          </div>
        </div>
        <FlowDiagram />
        <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Key Benefits of This Workflow</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
                <path d="M8 12L11 15L16 9" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h4 className="font-semibold text-[var(--text-color)] mb-1">Complete Automation</h4>
                <p className="text-sm text-[var(--text-color)]">From test development to reporting and integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
                <path d="M8 12L11 15L16 9" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h4 className="font-semibold text-[var(--text-color)] mb-1">Full Traceability</h4>
                <p className="text-sm text-[var(--text-color)]">End-to-end visibility from requirements to execution</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
                <path d="M8 12L11 15L16 9" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h4 className="font-semibold text-[var(--text-color)] mb-1">Scalable Architecture</h4>
                <p className="text-sm text-[var(--text-color)]">Parallel execution and cloud integration ready</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CodeAssistant />

      <SectionWrapper variant="conclusion">
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.2" />
            <path d="M32 20V32M32 32L42 38M32 32L22 38" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="32" r="18" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Conclusion: The New Standard
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-4">
          AI-assisted framework development isn't a futuristic concept—it's a practical, proven
          approach delivering real business value today. Our results speak for themselves: 70% faster
          setup, 25% better code quality, 94% fewer flaky tests, and significantly improved team
          productivity.
        </p>
        <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-4">
          The key isn't the AI model itself, but the strategic approach: clear specifications,
          right-tool selection, rigorous validation, and continuous improvement. Whether you're using
          Gemini Flash, the newer Gemini Pro, or the powerful Gemini Opus, the principles remain
          the same.
        </p>
        <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-6">
          The question isn't whether to adopt AI-assisted development—it's how quickly you can
          implement it. The teams that master this approach today will set the standard for their
          organizations tomorrow.
        </p>
        <div className="bg-white rounded-xl p-4 sm:p-8 mt-6 sm:mt-8 border-2 border-slate-900">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-color)] mb-4">
            Ready to Transform Your Automation Framework Development?
          </h3>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="flex items-center gap-3 bg-[var(--surface-color)] rounded-lg p-3 border border-slate-200">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="20" height="24" rx="2" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
                <line x1="10" y1="10" x2="22" y2="10" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="15" x2="22" y2="15" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="20" x2="18" y2="20" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-semibold text-sm sm:text-base text-[var(--text-color)]">Start with documentation</span>
            </div>
            <div className="flex items-center gap-3 bg-[var(--surface-color)] rounded-lg p-3 border border-slate-200">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="3" fill="var(--secondary-action-color)" />
                <circle cx="16" cy="16" r="8" stroke="var(--primary-action-color)" strokeWidth="2" fill="none" />
                <circle cx="16" cy="16" r="13" stroke="var(--secondary-action-color)" strokeWidth="2" fill="none" />
              </svg>
              <span className="font-semibold text-sm sm:text-base text-[var(--text-color)]">Choose strategically</span>
            </div>
            <div className="flex items-center gap-3 bg-[var(--surface-color)] rounded-lg p-3 border border-slate-200">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="13" stroke="var(--primary-action-color)" strokeWidth="2" />
                <path d="M10 16L14 20L22 12" stroke="var(--secondary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-sm sm:text-base text-[var(--text-color)]">Validate rigorously</span>
            </div>
          </div>
          <p className="text-[var(--text-color)] text-lg sm:text-xl font-semibold text-center">
            The results will follow.
          </p>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default App;