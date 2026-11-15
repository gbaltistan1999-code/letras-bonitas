import { SlugView, slugMetadata, slugStaticParams } from "@/components/pages/SlugRoute";

export const dynamicParams = false;
export const generateStaticParams = () => slugStaticParams("pt");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return slugMetadata("pt", (await params).slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <SlugView locale="pt" slug={(await params).slug} />;
}
