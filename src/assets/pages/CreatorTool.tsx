import { CreatorSelector } from "../components/CreatorSelector";
import { useState, useEffect } from "react";
import { CreatorStepper } from "../components/CreatorStepper";
import { useNavigate, useParams } from "react-router-dom";
import { CreatorForm } from "../components/CreatorForm";

export const CreatorTool = () => {
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState("None");

  const navigate = useNavigate();
  const { value } = useParams();

  useEffect(() => {
    if (value) {
      if (value === "PC" || value === "SPELL" || value === "ITEM") {
        setChoice(value);
        setStep(2);
      } else {
        navigate("/Creator-Tool");
      }
    }
  }, [choice, value]);

  const handleChoiceSelectionClick = () => {
    navigate(`/Creator-Tool/${choice}`);
    setStep(2);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full h-full min-h-subnav">
      <CreatorStepper step={step} />
      {step === 1 && (
        <CreatorSelector
          handleContinue={handleChoiceSelectionClick}
          choice={choice}
          setChoice={setChoice}
        />
      )}
      {step === 2 && <CreatorForm choice={choice} />}
    </div>
  );
};
