import { SlugView, slugMetadata, slugStaticParams } from "@/components/pages/SlugRoute";

export const dynamicParams = false;
export const generateStaticParams = () => slugStaticParams("en");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return slugMetadata("en", (await params).slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <SlugView locale="en" slug={(await params).slug} />;
}
