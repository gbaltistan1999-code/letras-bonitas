import { LocaleRootLayout, rootMetadata, rootViewport } from "@/components/LocaleRootLayout";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LocaleRootLayout locale="en">{children}</LocaleRootLayout>;
}
