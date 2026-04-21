import type { DictionaryEntry } from "@/lib/types/dictionary";

export function searchEntries(entries: DictionaryEntry[], query?: string | string[]) {
  const keyword = Array.isArray(query) ? query[0] : query;

  if (!keyword) {
    return entries;
  }

  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return entries;
  }

  return entries.filter((entry) => {
    const searchableText = [
      entry.title,
      entry.category,
      entry.description,
      entry.summary,
      ...entry.tags
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedKeyword);
  });
}
