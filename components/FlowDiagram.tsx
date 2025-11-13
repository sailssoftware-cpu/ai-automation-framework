
import React from 'react';
import FlowPhase from './FlowPhase';

const FlowDiagram: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
      <div className="overflow-x-auto">
        <FlowPhase
          phaseNumber={1}
          title="TEST DEVELOPMENT"
          bgColorClass="bg-[var(--primary-action-color)]"
          items={[
            { heading: 'Feature Files', description: '.feature - Gherkin BDD' },
            { heading: 'Step Definitions', description: '.ts - TypeScript' },
            { heading: 'Page Object Model', description: 'caseDetailsPage.ts' },
            { heading: 'UI Interactions', description: '& Verifications' },
          ]}
        />

        <FlowPhase
          phaseNumber={2}
          title="CONFIGURATION & SETUP"
          bgColorClass="bg-[var(--secondary-action-color)]"
          items={[
            { heading: 'Config Files', description: 'config.properties\n.env files' },
            { heading: 'Environment Manager', description: 'alpha | int | prod' },
            { heading: 'Browser Config', description: 'Chromium/Headless' },
            { heading: 'Parallel Workers', description: '2-3 workers' },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[var(--primary-action-color)]">
              3
            </div>
            <h3 className="text-xl font-bold text-[var(--text-color)]">TEST EXECUTION</h3>
          </div>
          <div className="ml-11">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-[var(--text-color)] mb-2">Command Execution</h4>
                <p className="text-sm text-[var(--text-color)]">npm test / npm run test:regression</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-[var(--text-color)] mb-2">Test Engine</h4>
                <p className="text-sm text-[var(--text-color)]">Cucumber Runner + Playwright Engine</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-[var(--text-color)] mb-2">Worker 1</h4>
                <p className="text-sm text-[var(--text-color)]">Scenario 1,3,5...</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-[var(--text-color)] mb-2">Worker 2</h4>
                <p className="text-sm text-[var(--text-color)]">Scenario 2,4,6...</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-[var(--text-color)] mb-2">Artifacts</h4>
                <p className="text-sm text-[var(--text-color)]">Screenshots | Videos | Traces</p>
              </div>
            </div>
          </div>
        </div>

        <FlowPhase
          phaseNumber={4}
          title="REPORT GENERATION"
          bgColorClass="bg-[var(--secondary-action-color)]"
          items={[
            { heading: 'Raw Messages', description: 'cucumber_messages.ndjson\n8496 messages' },
            { heading: 'Converter', description: 'convertMessagesToJson.js' },
            { heading: 'JSON Report', description: 'Features: 17\nScenarios: 182' },
            { heading: 'HTML Dashboard', description: 'index.html\nfeature-details.html' },
          ]}
        />

        <FlowPhase
          phaseNumber={5}
          title="XRAY UPLOAD"
          bgColorClass="bg-[var(--primary-action-color)]"
          items={[
            { heading: 'Upload Command', description: 'npm run xray:upload' },
            { heading: 'Data Cleaning', description: 'cleanCucumberJson.ts\nFilter & Clean Data' },
            { heading: 'API Integration', description: 'POST to Xray Cloud API\nBearer Token Auth' },
            { heading: 'Archive Upload', description: '278 MB Archive\nReports + Screenshots' },
          ]}
        />

        <FlowPhase
          phaseNumber={6}
          title="JIRA/XRAY INTEGRATION"
          bgColorClass="bg-[var(--secondary-action-color)]"
          items={[
            { heading: 'Test Execution', description: 'RGTRPT-3248\n178 Test Cases Updated' },
            { heading: 'Status Tracking', description: 'Pass/Fail Status\nExecution Time\nStep Results' },
            { heading: 'Traceability', description: 'Coverage Reports\nDefect Linking\nVersion History' },
          ]}
        />

        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-[var(--primary-action-color)]">
              7
            </div>
            <h3 className="text-xl font-bold text-[var(--text-color)]">CI/CD PIPELINE</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-4 ml-11">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-[var(--text-color)] mb-2">Trigger</h4>
              <p className="text-sm text-[var(--text-color)]">GitHub Actions<br />Push/PR or Scheduled</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-[var(--text-color)] mb-2">Setup</h4>
              <p className="text-sm text-[var(--text-color)]">Checkout → Setup Node.js<br />Install Dependencies</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-[var(--text-color)] mb-2">Execution</h4>
              <p className="text-sm text-[var(--text-color)]">Set Environment<br />Execute Tests</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-[var(--text-color)] mb-2">Reporting</h4>
              <p className="text-sm text-[var(--text-color)]">Generate Reports<br />Upload to Xray</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-[var(--text-color)] mb-2">Artifacts</h4>
              <p className="text-sm text-[var(--text-color)]">Upload Artifacts<br />Post Summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;