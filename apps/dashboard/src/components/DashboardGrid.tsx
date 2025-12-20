import { memo } from "react";
import { StatsRow } from "./Cards/Stats/StatsRow";
import { InformationRow } from "./Cards/Information/InformationRow";
import { ChartsRow } from "./Cards/Charts/ChartsRow";
import { ManagementRow } from "./Cards/Management/ManagementRow";
import { Footer } from "./Footer";

export const DashboardGrid = memo(() => (
  <div className="w-full px-6 py-6 mx-auto">
    <StatsRow />
    <InformationRow />
    <ChartsRow />
    <ManagementRow />
    <Footer />
  </div>
));

DashboardGrid.displayName = "DashboardGrid";
