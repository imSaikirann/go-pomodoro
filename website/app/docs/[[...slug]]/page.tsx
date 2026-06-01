import { redirect } from "next/navigation";
import { siteLinks } from "@/lib/site-links";

type DocsRedirectPageProps = {
  params: {
    slug?: string[];
  };
};

const docsRedirects: Record<string, string> = {
  installation: siteLinks.installation,
  usage: siteLinks.usage,
  commands: siteLinks.commands,
};

export default function DocsRedirectPage({ params }: DocsRedirectPageProps) {
  const section = params.slug?.[0] || "";

  redirect(docsRedirects[section] || siteLinks.docs);
}
