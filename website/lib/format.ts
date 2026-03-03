export function formatDownloads(n: number | null) {
  if (!n) return null;

  if (n >= 1000) return `${Math.floor(n / 1000)}k+`;
  if (n >= 100) return `${Math.floor(n / 100) * 100}+`;
  return `${n}+`;
}