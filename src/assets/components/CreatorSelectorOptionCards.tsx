import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface CreatorSelectorOptionCardsProps {
  cardTitle: string;
  cardValue: string;
}

export const CreatorSelectorOptionCards: React.FC<
  CreatorSelectorOptionCardsProps
> = ({ cardTitle, cardValue }) => {
  return (
    <RadioGroup.Option value={cardValue}>
      {({ checked }) => (
        <div
          className={
            checked
              ? "bg-white text-black text-lg w-full max-w-xs text-center flex flex-col p-2 rounded-lg gap-4"
              : "bg-gray-700 w-full text-lg max-w-xs text-white text-center flex flex-col p-2 rounded-lg gap-4"
          }
        >
          <div className="w-full aspect-square bg-slate-500 rounded-md"></div>
          <span>{cardTitle}</span>
          <div className=" flex flex-row justify-center">
            <div className="w-10 bg-slate-300 aspect-square rounded-full">
              {checked && <CheckCircleIcon className="w-full text-slate-900" />}
            </div>
          </div>
        </div>
      )}
    </RadioGroup.Option>
  );
};
