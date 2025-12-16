import { memo } from "react";
import { InformationCard } from "./InformationCard";

export const InformationRow = memo(() => (
    <div className="flex flex-wrap -mx-3">
        <InformationCard />
    </div>
));

InformationRow.displayName = "InformationRow";