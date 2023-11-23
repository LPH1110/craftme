import ThemeContextProvider from "@/context/themeContext";
import ActiveSectionProvider from "@/context/activeSectionContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Craft.me | Website Designs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-700 transition-all`}
      >
        <ThemeContextProvider>
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
