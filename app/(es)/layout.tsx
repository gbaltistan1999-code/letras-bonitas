import { LocaleRootLayout, rootMetadata, rootViewport } from "@/components/LocaleRootLayout";

export const metadata = rootMetadata("es");
export const viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LocaleRootLayout locale="es">{children}</LocaleRootLayout>;
}
