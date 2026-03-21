import { useState } from 'react';
import './StepByStepSolution.css';

interface Step {
  step: number;
  description: string;
  calculation?: string;
  explanation: string;
}

interface StepByStepSolutionProps {
  steps: Step[];
  title: string;
}

export default function StepByStepSolution({ steps, title }: StepByStepSolutionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="step-by-step-solution">
      <h3 className="solution-title">{title}</h3>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${index <= currentStep ? 'visible' : ''} ${index === currentStep ? 'active' : ''}`}
          >
            <div className="step-number">{step.step}</div>
            <div className="step-content">
              <p className="step-description">{step.description}</p>
              {step.calculation && (
                <div className="step-calculation">{step.calculation}</div>
              )}
              <p className="step-explanation">{step.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="solution-controls">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="control-button"
        >
          ← Hapi i Mëparshëm
        </button>
        <button
          onClick={() => setShowAll(!showAll)}
          className="control-button"
        >
          {showAll ? 'Fshihe Të Gjitha' : 'Shfaq Të Gjitha'}
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="control-button"
        >
          Hapi Tjetër →
        </button>
      </div>

      {showAll && (
        <div className="full-solution">
          <h4>Zgjidhja e Plotë:</h4>
          {steps.map((step, index) => (
            <div key={index} className="full-step">
              <strong>Hapi {step.step}:</strong> {step.description}
              {step.calculation && <div className="calc">{step.calculation}</div>}
              <p>{step.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

