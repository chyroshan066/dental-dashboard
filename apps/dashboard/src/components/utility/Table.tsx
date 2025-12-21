import { Children, ClassName, Img, Name } from "@/types";
import Image from "next/image";

interface TDataProps extends Children, ClassName {
  isLastRow: boolean;
}

interface TableAvatarCellProps extends Name, Img {
  subTitle?: string;
}

interface CaptionProps extends Children, ClassName {}

export const Table = ({ children }: Children) => (
  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
    {children}
  </table>
);

export const THead = ({ children }: Children) => (
  <thead className="align-bottom">{children}</thead>
);

export const TData = ({ children, className, isLastRow }: TDataProps) => (
  <td
    className={`p-2 align-middle bg-transparent ${
      !isLastRow && "border-b"
    } whitespace-nowrap ${className}`}
  >
    {children}
  </td>
);

export const TableAvatarCell = ({
  img,
  name,
  subTitle,
}: TableAvatarCellProps) => (
  <div className="flex px-2 py-1">
    <Image
      src={img}
      width={36}
      height={36}
      className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
      alt={name}
    />
    <div className="flex flex-col justify-center">
      <h6 className="mb-0 text-sm leading-normal">{name}</h6>
      {subTitle && (
        <p className="mb-0 text-xs leading-tight text-slate-400">{subTitle}</p>
      )}
    </div>
  </div>
);

export const Caption = ({ children, className }: CaptionProps) => (
  <span className={`text-xs font-semibold leading-tight ${className}`}>
    {children}
  </span>
);
