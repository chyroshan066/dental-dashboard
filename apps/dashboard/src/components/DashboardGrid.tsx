import { memo } from "react";
import { StatsRow } from "./Cards/Stats/StatsRow";
import { InformationRow } from "./Cards/Information/InformationRow";

export const DashboardGrid = memo(() => (
    <div className="w-full px-6 py-6 mx-auto">
        <StatsRow />
        <InformationRow />
    </div>
));

DashboardGrid.displayName = "DashboardGrid";