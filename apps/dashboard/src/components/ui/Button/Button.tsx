import { BackgroundColor, ClassName } from "@/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const variants = {
  outline:
    "px-8 py-2 mb-0 border border-solid shadow-none border-fuchsia-500 text-fuchsia-500 hover:opacity-75",
  gradient:
    "px-6 py-3 text-white shadow-soft-md bg-150 hover:shadow-soft-xs active:opacity-85 bg-x-25",
};

interface ButtonProps extends ClassName, BackgroundColor {
  btnText: string;
  icon?: IconDefinition;
  variant?: keyof typeof variants;
}

export const Button = ({
  className,
  btnText,
  backgroundColor,
  icon,
  variant = "outline",
}: ButtonProps) => (
  <button
    type="button"
    className={`inline-block font-bold text-center uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 tracking-tight-soft ${variants[variant]} ${backgroundColor} ${className}`}
  >
    {icon ? (
      <>
        <FontAwesomeIcon icon={icon} /> &nbsp;{btnText}
      </>
    ) : (
      btnText
    )}
  </button>
);
