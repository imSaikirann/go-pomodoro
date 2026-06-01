const mintlifyDocsUrl =
  process.env.NEXT_PUBLIC_MINTLIFY_DOCS_URL || "https://your-mintlify-docs-url.com";

export const siteLinks = {
  docs: mintlifyDocsUrl,
  installation: `${mintlifyDocsUrl}/installation`,
  usage: `${mintlifyDocsUrl}/usage`,
  commands: `${mintlifyDocsUrl}/commands`,
};
