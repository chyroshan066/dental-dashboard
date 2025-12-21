import { Children, ClassName } from "@/types";

interface CardHeaderWrapperProps extends Children, ClassName {}

export const CardHeaderWrapper = ({
  children,
  className,
}: CardHeaderWrapperProps) => (
  <div
    className={`mb-0 rounded-t-2xl border-b-0 bg-white p-6 pb-0 ${className}`}
  >
    {children}
  </div>
);
