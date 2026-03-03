import type { ReactNode } from 'react';
import DocsShell from '@/components/docs/DocsShell';

type DocsLayoutProps = {
  children: ReactNode;
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <DocsShell>{children}</DocsShell>;
}