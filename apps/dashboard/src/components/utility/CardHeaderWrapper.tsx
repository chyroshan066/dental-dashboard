import { Children } from "@/types";
import { memo } from "react";

export const CardHeaderWrapper = memo(({
    children
}: Children) => (
    <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
        {children}
    </div>
));

CardHeaderWrapper.displayName = "CardHeaderWrapper";