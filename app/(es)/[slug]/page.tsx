import { SlugView, slugMetadata, slugStaticParams } from "@/components/pages/SlugRoute";

export const dynamicParams = false;
export const generateStaticParams = () => slugStaticParams("es");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return slugMetadata("es", (await params).slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <SlugView locale="es" slug={(await params).slug} />;
}
