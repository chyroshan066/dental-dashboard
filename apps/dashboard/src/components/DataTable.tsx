import { AUTHOR_TABLE_HEADER, AUTHORS_DATA } from "@/constants";
import { memo } from "react";
import { CardWrapper } from "./utility/CardWrapper";
import { CardHeaderWrapper } from "./utility/CardHeaderWrapper";
import { PerfectScrollbarComponent } from "./utility/PerfectScrollbarComponent";
import { Caption, Table, TableAvatarCell, TData, THead } from "./utility/Table";

const statusStyles: { [key: string]: string } = {
  Online: "bg-gradient-soft-green600-lime400",
  Offline: "bg-gradient-soft-slate600-slate300",
};

export const DataTable = memo(() => (
  <div className="flex flex-wrap -mx-3">
    <CardWrapper
      outerDivClassName="flex-none"
      innerDivClassName="mb-6 border-transparent"
    >
      <CardHeaderWrapper className="border-b-solid border-b-transparent">
        <h6>Authors table</h6>
      </CardHeaderWrapper>
      <div className="flex-auto px-0 pt-0 pb-2">
        <PerfectScrollbarComponent
          className="management-table-ps relative overflow-hidden touch-pan-y"
          options={{
            suppressScrollY: true, // Only horizontal for the table
            wheelPropagation: true, // Allows the page to scroll when we wheel over the table
          }}
        >
          <div className="p-0">
            <Table>
              <THead>
                <tr>
                  {AUTHOR_TABLE_HEADER.map((header) => (
                    <th
                      key={header.id}
                      className={`table-header last:font-semibold last:capitalize last:border-solid ${
                        header.id !== AUTHOR_TABLE_HEADER.length
                          ? `text-${header.textAlign} uppercase text-xxs border-b-solid`
                          : ""
                      } border-gray-200 shadow-none tracking-none ${
                        header.className
                      }`}
                    >
                      {header.header}
                    </th>
                  ))}
                </tr>
              </THead>

              <tbody>
                {AUTHORS_DATA.map((author, index) => (
                  <tr key={author.id}>
                    <TData
                      isLastRow={index === AUTHORS_DATA.length - 1}
                      className="shadow-transparent"
                    >
                      <TableAvatarCell
                        img={author.user.avatar}
                        name={author.user.name}
                        subTitle={author.user.email}
                      />
                    </TData>
                    <TData
                      isLastRow={index === AUTHORS_DATA.length - 1}
                      className="shadow-transparent"
                    >
                      <p className="mb-0 caption font-semibold">
                        {author.function.role}
                      </p>
                      <p className="mb-0 caption text-slate-400">
                        {author.function.department}
                      </p>
                    </TData>
                    <TData
                      isLastRow={index === AUTHORS_DATA.length - 1}
                      className="text-sm leading-normal text-center shadow-transparent"
                    >
                      <span
                        className={`${
                          statusStyles[author.status]
                        } px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                      >
                        {author.status}
                      </span>
                    </TData>
                    <TData
                      isLastRow={index === AUTHORS_DATA.length - 1}
                      className="text-center shadow-transparent"
                    >
                      <Caption className="text-slate-400">
                        {author.employedDate}
                      </Caption>
                    </TData>
                    <TData
                      isLastRow={index === AUTHORS_DATA.length - 1}
                      className="shadow-transparent"
                    >
                      <a
                        href="#"
                        className="text-xs font-semibold leading-tight text-slate-400"
                      >
                        {" "}
                        Edit{" "}
                      </a>
                    </TData>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </PerfectScrollbarComponent>
      </div>
    </CardWrapper>
  </div>
));
