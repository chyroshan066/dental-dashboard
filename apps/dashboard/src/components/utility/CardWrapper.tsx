import { Children } from "@/types";
import { memo } from "react";

interface CardWrapperProps extends Children {
    outerDivClassName: string;
    innerDivClassName?: string;
}

export const CardWrapper = memo(({
    children, outerDivClassName, innerDivClassName
}: CardWrapperProps) => (
    <div className={`w-full max-w-full px-3 lg:flex-none ${outerDivClassName}`}>
        <div className={`border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border ${innerDivClassName}`}>
            {children}
        </div>
    </div>
));

CardWrapper.displayName = "CardWrapper";