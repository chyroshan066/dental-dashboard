import { memo } from "react";
import { StatsRow } from "./Cards/Stats/StatsRow";

export const DashboardGrid = memo(() => (
    <div className="w-full px-6 py-6 mx-auto">
        <StatsRow />
    </div>
));

DashboardGrid.displayName = "DashboardGrid";