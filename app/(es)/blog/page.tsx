import { BlogIndexView, blogIndexMetadata } from "@/components/pages/BlogViews";

export const metadata = blogIndexMetadata("es");

export default function Page() {
  return <BlogIndexView locale="es" />;
}
