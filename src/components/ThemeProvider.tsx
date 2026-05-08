import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="light"
    forcedTheme="light"
    enableSystem={false}
    disableTransitionOnChange={false}
    storageKey="inkwell-theme"
  >
    {children}
  </NextThemesProvider>
);
