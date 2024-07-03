"use client";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
