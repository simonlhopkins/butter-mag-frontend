"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
const AOSComponent = ({ children }: Props) => {
  const pathname = usePathname();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    console.log("initializing AOS");
    if (!prefersReducedMotion) {
      //todo
    }
    AOS.init({ offset: 0 });
  }, [pathname]);
  return <>{children}</>;
};

export default AOSComponent;
