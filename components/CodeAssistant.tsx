import React, { useState, useCallback } from 'react';
import { generateCodeResponse } from '../services/geminiService';
import IconBox from './IconBox';
// Import SectionWrapper
import SectionWrapper from './SectionWrapper';

const CodeAssistant: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('Refactor this code for better readability and add JSDoc comments.');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateResponse = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to process.');
      return;
    }
    setLoading(true);
    setError(null);
    setResponse('');
    try {
      const result = await generateCodeResponse(prompt, code);
      setResponse(result.text);
    } catch (err) {
      setError(`Failed to get response: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, [code, prompt]);

  return (
    <SectionWrapper variant='primary-accent'>
      <IconBox
        icon={
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="var(--primary-action-color)" opacity="0.1" />
            <path d="M22 24L16 32L22 40M42 24L48 32L42 40M38 18L26 46" stroke="var(--primary-action-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="AI-Powered Code Assistant"
        textColorClass="text-[var(--text-color)]"
      />
      <p className="text-lg text-[var(--text-color)] leading-relaxed mb-6">
        Leverage Gemini to refactor, explain, or enhance your code snippets. Enter your code and tell the AI what to do!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="code-input" className="block text-xl font-semibold text-[var(--text-color)] mb-3">
            Your Code:
          </label>
          <textarea
            id="code-input"
            className="w-full p-4 border border-slate-300 rounded-lg bg-white text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`function calculateSum(a, b) {\n  return a + b;\n}`}
          ></textarea>
        </div>
        <div>
          <label htmlFor="prompt-input" className="block text-xl font-semibold text-[var(--text-color)] mb-3">
            Your Prompt:
          </label>
          <textarea
            id="prompt-input"
            className="w-full p-4 border border-slate-300 rounded-lg bg-white text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Explain this function in simple terms."
          ></textarea>
        </div>
      </div>

      <button
        onClick={handleGenerateResponse}
        className="mt-6 w-full md:w-auto px-8 py-3 bg-[var(--primary-action-color)] text-white font-bold rounded-lg hover:bg-[var(--secondary-action-color)] transition-colors duration-200 ease-in-out shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate AI Response'}
      </button>

      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">Please ensure your API_KEY is correctly configured as an environment variable and try again.</p>
        </div>
      )}

      {response && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">AI Response:</h3>
          <div className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
            <pre className="text-white text-sm whitespace-pre-wrap">{response}</pre>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default CodeAssistant;