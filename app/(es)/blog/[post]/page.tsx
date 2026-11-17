import { BlogPostView, blogPostMetadata, blogPostStaticParams } from "@/components/pages/BlogViews";

export const dynamicParams = false;
export const generateStaticParams = () => blogPostStaticParams("es");

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }) {
  return blogPostMetadata("es", (await params).post);
}

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  return <BlogPostView locale="es" slug={(await params).post} />;
}
