import { HomeView, homeMetadata } from "@/components/pages/HomeView";

export const metadata = homeMetadata("pt");

export default function Page() {
  return <HomeView locale="pt" />;
}
