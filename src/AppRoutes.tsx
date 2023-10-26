import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./assets/pages/Dashboard";
import { CampaignTool } from "./assets/pages/CampaignTool";
import { CreatorTool } from "./assets/pages/CreatorTool";
import { References } from "./assets/pages/References";
import { CampaignWiki } from "./assets/pages/CampaignWiki";
import { NoMatch } from "./assets/pages/NoMatch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/Campaign-Tool" element={<CampaignTool />} />

      <Route path="/Creator-Tool" element={<CreatorTool />} />

      <Route path="/References" element={<References />} />

      <Route path="/Campaign-wiki" element={<CampaignWiki />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
