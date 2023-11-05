import { ItemForm } from "./ItemForm";

export const CreatorForm = ({ choice }) => {
  return (
    <div className="w-screen h-full p-4 lg:p-8">
      {choice === "ITEM" && <ItemForm />}
    </div>
  );
};
