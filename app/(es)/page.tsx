import { HomeView, homeMetadata } from "@/components/pages/HomeView";

export const metadata = homeMetadata("es");

export default function Page() {
  return <HomeView locale="es" />;
}
