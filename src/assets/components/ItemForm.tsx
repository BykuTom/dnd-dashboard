import { useState } from "react";

export const ItemForm = () => {
  const itemFormTabs = ["Description", "Effect", "Details"];

  const [currentItemFormTab, setCurrentItemFormTab] = useState("Details");

  const handleTabChange = (tab: string) => {
    setCurrentItemFormTab(tab);
    console.log(currentItemFormTab);
  };
  return (
    <div className="w-full min-h-[36rem] bg-stone-800 rounded-lg pb-4">
      <div className="navbar rounded-t-lg bg-stone-900 xs:h-12 justify-center">
        <div className="gap-0 btn-group btn-group-vertical xs:btn-group-horizontal  btn-group-scrollable max-w-[12rem] xs:max-w-fit">
          {itemFormTabs.map((tab) => {
            return (
              <button
                className="navbar-item btn bg-stone-800 hover:bg-stone-700 "
                onClick={() => {
                  handleTabChange(tab);
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
