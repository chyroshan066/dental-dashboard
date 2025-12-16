import { memo } from "react";
import { StatCard } from "./StatCard";

export const StatsRow = memo(() => (
    <div className="flex flex-wrap -mx-3">
        <StatCard />
    </div>
))