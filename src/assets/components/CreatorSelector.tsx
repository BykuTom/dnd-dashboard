import { RadioGroup } from "@headlessui/react";
import { CreatorSelectorOptionCards } from "./CreatorSelectorOptionCards";

interface CreatorSelectorProp {
  handleContinue: () => void;
  choice: string;
  setChoice: (value: string) => void;
}

export const CreatorSelector: React.FC<CreatorSelectorProp> = ({
  handleContinue,
  choice,
  setChoice,
}) => {
  const radioCards = [
    { cardTitle: "Character", cardValue: "PC" },
    { cardTitle: "Spell", cardValue: "SPELL" },
    { cardTitle: "Item", cardValue: "ITEM" },
  ];
  return (
    <>
      <RadioGroup
        value={choice}
        onChange={setChoice}
        className={
          "grid grid-cols-repeat-auto-20-full gap-8 w-full max-w-[calc(80rem+8rem)] mx-auto text-center justify-center "
        }
      >
        <RadioGroup.Label className={"sr-only"}>
          Choose what to create:
        </RadioGroup.Label>
        {radioCards.map((radioCard) => (
          <CreatorSelectorOptionCards
            key={radioCard.cardTitle}
            cardTitle={radioCard.cardTitle}
            cardValue={radioCard.cardValue}
          />
        ))}
      </RadioGroup>
      <button className="btn btn-primary btn-lg" onClick={handleContinue}>
        Confirm
      </button>
    </>
  );
};
