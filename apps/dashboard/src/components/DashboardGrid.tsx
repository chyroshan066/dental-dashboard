import { memo } from "react";
import { StatsRow } from "./cards/Stats/StatsRow";
import { InformationRow } from "./cards/Information/InformationRow";
import { ChartsRow } from "./cards/Charts/ChartsRow";
import { ManagementRow } from "./cards/Management/ManagementRow";
import { Footer } from "./layout/Footer";

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
