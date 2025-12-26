"use client";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ACCOUNT_PAGES, NAVLINKS } from "@/lib/constants";
import { useDisclosure } from "@/hooks/useDisclosure";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { NavItem } from "./NavItem";
import { HelpCard } from "./HelpCard";

export const SideNav = memo(() => {
  const { isOpen, toggle, close, contentRef } = useDisclosure(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("toggle-sidenav", toggle);
    return () => window.removeEventListener("toggle-sidenav", toggle);
  }, [toggle]);

  return (
    <aside
      ref={contentRef as React.RefObject<HTMLElement>}
      className={`max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ${
        isOpen ? "translate-x-0 shadow-soft-xl" : "-translate-x-full"
      }`}
    >
      <ScrollArea
        className="h-full w-full relative flex flex-col overflow-hidden rounded-2xl z-40"
        options={{
          wheelSpeed: 0.5,
          wheelPropagation: false,
          minScrollbarLength: 20,
          suppressScrollX: true,

          maxScrollbarLength: 50,
        }}
      >
        <div className="sticky top-0 z-20 max-xl:bg-white min-[1200px]:bg-gray-50">
          <div className="h-19.5 px-6 py-6">
            <FontAwesomeIcon
              icon={faTimes}
              className={`absolute top-0 right-0 p-4 opacity-50 cursor-pointer text-slate-400 xl:hidden ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={close}
            />
            <Link
              className="block m-0 text-sm whitespace-nowrap text-slate-700"
              href="/"
              target="_blank"
            >
              <Image
                src="/images/logo-ct.png"
                width={32}
                height={32}
                className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
                alt="main_logo"
                priority
              />
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                Soft UI Dashboard
              </span>
            </Link>
          </div>

          <Separator className="mt-0" />
        </div>

        {/* SCROLLABLE LIST - This section is the primary scrollable content */}
        <ul className="flex flex-col pl-0 mb-auto pb-4">
          {NAVLINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <NavItem
                key={link.id}
                isActive={isActive}
                href={link.href}
                name={link.name}
                icon={link.icon}
              />
            );
          })}

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
              Account pages
            </h6>
          </li>

          {ACCOUNT_PAGES.map((page) => {
            const isActive = pathname === page.href;

            return (
              <NavItem
                key={page.id}
                isActive={isActive}
                href={page.href}
                name={page.name}
                icon={page.icon}
              />
            );
          })}
        </ul>

        <HelpCard />
      </ScrollArea>
    </aside>
  );
});

SideNav.displayName = "SideNav";
