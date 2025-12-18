import { memo } from "react";
import { ManagementCard } from "./ManagementCard";

export const ManagementRow = memo(() => (
    <div className="flex flex-wrap my-6 -mx-3">
        <ManagementCard />
    </div>
));

ManagementRow.displayName = "ManagementRow";