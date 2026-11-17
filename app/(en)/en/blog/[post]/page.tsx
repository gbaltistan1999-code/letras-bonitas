import { BlogPostView, blogPostMetadata, blogPostStaticParams } from "@/components/pages/BlogViews";

export const dynamicParams = false;
export const generateStaticParams = () => blogPostStaticParams("en");

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }) {
  return blogPostMetadata("en", (await params).post);
}

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  return <BlogPostView locale="en" slug={(await params).post} />;
}
