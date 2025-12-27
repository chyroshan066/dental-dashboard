"use client";

import { TIMELINE_DATA } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { ArrowUp } from "@/components/ui/ArrowUp";
import { Card } from "@/components/ui/card/Card";
import { CardHeader } from "@/components/ui/card/CardHeader";
import { ProjectsTable } from "./ProjectsTable";

export const ManagementCard = memo(() => {
  return (
    <>
      <ProjectsTable />

      {/* Card 2 */}
      <Card
        outerDivClassName="md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none"
        innerDivClassName="h-full border-black/12.5 shadow-soft-xl bg-white"
      >
        <CardHeader className="border-black/12.5 border-solid">
          <h6>Orders overview</h6>
          <ArrowUp percentage="24%" time="this month" />
        </CardHeader>
        <div className="flex-auto p-4">
          <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-300 before:content-[''] before:lg:-ml-px">
            {TIMELINE_DATA.map((data) => (
              <div
                key={data.id}
                className="relative mb-4 mt-0 after:clear-both after:table after:content-['']"
              >
                <span className="w-6.5 h-6.5 text-base absolute left-0.75 z-10 inline-flex items-center justify-center rounded-full bg-white text-center font-semibold">
                  <FontAwesomeIcon
                    icon={data.icon}
                    className={`relative z-10 text-md ${data.iconColor}`}
                  />
                </span>
                <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                  <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                    {" "}
                    {data.title}
                  </h6>
                  <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                    {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
});

ManagementCard.displayName = "ManagementCard";
