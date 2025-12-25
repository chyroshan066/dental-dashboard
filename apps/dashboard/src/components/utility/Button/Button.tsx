import { ClassName } from "@/types";

interface ButtonProps extends ClassName {
  btnText: string;
}

export const Button = ({ className, btnText }: ButtonProps) => (
  <button
    type="button"
    className={`inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:opacity-75 ${className}`}
  >
    {btnText}
  </button>
);
