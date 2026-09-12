import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KY Fast Construction | Roofing, Remodeling & Carpentry in Monticello, KY",
  description:
    "KY Fast Construction provides roofing, remodeling and carpentry services in Monticello, Kentucky. Call (606) 219-7003 or request a free estimate.",
};

export const viewport: Viewport = {
  themeColor: "#20231F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
