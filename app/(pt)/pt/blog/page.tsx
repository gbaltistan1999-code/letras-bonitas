import { BlogIndexView, blogIndexMetadata } from "@/components/pages/BlogViews";

export const metadata = blogIndexMetadata("pt");

export default function Page() {
  return <BlogIndexView locale="pt" />;
}
