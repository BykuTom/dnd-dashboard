import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface CreatorStepperProps {
  step: number;
}

export const CreatorStepper: React.FC<CreatorStepperProps> = ({ step }) => {
  return (
    <ol className="steps steps-vertical md:steps-horizontal max-w-5xl mx-auto">
      <li className="step">
        <div className="step-circle">
          {step > 1 ? (
            <CheckCircleIcon />
          ) : (
            <div className="spinner-circle"></div>
          )}
        </div>
        <h3>Choose What To Create</h3>
      </li>
      <li className="step">
        <div className="step-circle">
          {step > 2 ? (
            <CheckCircleIcon />
          ) : step < 2 ? null : (
            <div className="spinner-circle"></div>
          )}
        </div>
        <h3>Fill Out The Details</h3>
      </li>
      <li className="step">
        <div className="step-circle">
          {" "}
          {step > 3 ? (
            <CheckCircleIcon />
          ) : step < 3 ? null : (
            <div className="spinner-circle"></div>
          )}
        </div>
        <h3>Save Or Export Your Creation</h3>
      </li>
    </ol>
  );
};
