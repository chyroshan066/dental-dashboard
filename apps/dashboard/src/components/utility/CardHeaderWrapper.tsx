import { Children } from "@/types";

export const CardHeaderWrapper = ({
    children
}: Children) => (
    <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
        {children}
    </div>
);
