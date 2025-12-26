import { Card } from "@/components/ui/card/Card";
import { CardHeader } from "@/components/ui/card/CardHeader";
import { ScrollArea } from "@/components/ui/ScrollArea";
import {
  Caption,
  Table,
  TableAvatarCell,
  TData,
  THead,
} from "@/components/utility/Table";
import { AUTHOR_TABLE_HEADER, AUTHORS_DATA } from "@/lib/constants";

const statusStyles: { [key: string]: string } = {
  Online: "bg-gradient-soft-green600-lime400",
  Offline: "bg-gradient-soft-slate600-slate300",
};

export const AuthorsTable = () => (
  <div className="flex flex-wrap -mx-3">
    <Card
      outerDivClassName="flex-none"
      innerDivClassName="mb-6 border-transparent shadow-soft-xl bg-white"
    >
      <CardHeader className="border-b-solid border-b-transparent">
        <h6>Authors table</h6>
      </CardHeader>
      <div className="flex-auto px-0 pt-0 pb-2">
        <ScrollArea
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
                      className={`table-header text-slate-400 opacity-70 ${
                        header.id !== AUTHOR_TABLE_HEADER.length
                          ? `text-${header.textAlign} uppercase text-xxs border-b-solid font-bold`
                          : "font-semibold capitalize border-solid"
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
        </ScrollArea>
      </div>
    </Card>
  </div>
);
