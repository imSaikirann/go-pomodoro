export async function getNpmDownloads() {
  try {
    const res = await fetch(
      "https://api.npmjs.org/downloads/point/last-month/go-pomodoro",
      {
        next: { revalidate: 60 * 60 * 6 }, // ✅ cache for 6 hours
      }
    );

    if (!res.ok) throw new Error("Failed to fetch downloads");

    const data = await res.json();
    return data.downloads as number;
  } catch {
    return null;
  }
}