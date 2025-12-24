import { Children, ClassName, PaddingSize } from "@/types";

interface CardHeaderWrapperProps extends Children, ClassName, PaddingSize {}

export const CardHeaderWrapper = ({
  children,
  className,
  paddingSize = 6,
}: CardHeaderWrapperProps) => (
  <div
    className={`mb-0 rounded-t-2xl border-b-0 bg-white p-${paddingSize} pb-0 ${className}`}
  >
    {children}
  </div>
);
