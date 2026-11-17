import { BlogPostView, blogPostMetadata, blogPostStaticParams } from "@/components/pages/BlogViews";

export const dynamicParams = false;
export const generateStaticParams = () => blogPostStaticParams("pt");

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }) {
  return blogPostMetadata("pt", (await params).post);
}

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  return <BlogPostView locale="pt" slug={(await params).post} />;
}
