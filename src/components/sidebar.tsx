"use client";

import { Home } from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarItems } from "@/types";
import { useMediaQuery } from "usehooks-ts";

const sidebarItems: SidebarItems = {
  links: [{ label: "Home", href: "/", icon: Home }],
};

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }
}
