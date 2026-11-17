import { BlogIndexView, blogIndexMetadata } from "@/components/pages/BlogViews";

export const metadata = blogIndexMetadata("en");

export default function Page() {
  return <BlogIndexView locale="en" />;
}
