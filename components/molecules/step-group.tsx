"use client"
import StepBridge from "../atoms/step-bridge";
import StepButton from "../atoms/step-button";

type StepGroupProps = {
  steps: StepItem[];
  currentStep: number; 
  focusStep: number; 
};


export default function StepGroup({ steps, currentStep, focusStep }: StepGroupProps) {
  return (
    <div className="flex relative justify-between w-fit items-center">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        // const isActive = stepNumber === currentStep;
        const isActive = stepNumber === focusStep;
        const isDone = stepNumber < currentStep;

        return (
          <div key={step.href} className="flex items-center">
            <StepButton isActive={isActive} isDone={isDone} onClick={() => {
              window.location.href = step.href;
            }}>
              {stepNumber}
            </StepButton>
            {index !== steps.length - 1 && (
              <StepBridge isDone={stepNumber < currentStep - 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}
