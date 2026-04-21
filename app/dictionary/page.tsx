import Link from "next/link";

import { dictionaryEntries } from "@/lib/data/dictionary";
import { searchEntries } from "@/lib/utils/search";

export default async function DictionaryPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const entries = searchEntries(dictionaryEntries, resolvedSearchParams.q);

  return (
    <main className="min-h-screen bg-lifepit-soft px-5 py-10 text-lifepit-ink sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-bold text-lifepit-midnight hover:underline">
          トップへ戻る
        </Link>

        <div className="mt-6 rounded-md border border-white bg-gradient-to-br from-white via-lifepit-ice to-lifepit-mist p-6 shadow-luxury">
          <p className="text-sm font-black text-lifepit-blue">Guide List</p>
          <h1 className="mt-2 text-3xl font-black text-lifepit-midnight">案内一覧</h1>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              name="q"
              type="search"
              defaultValue={
                Array.isArray(resolvedSearchParams.q)
                  ? resolvedSearchParams.q[0]
                  : resolvedSearchParams.q
              }
              placeholder="例：SNS、Next、連携"
              className="min-h-12 flex-1 rounded-md border border-white px-4 shadow-sm outline-none focus:border-lifepit-blue focus:ring-4 focus:ring-lifepit-sky"
            />
            <button className="min-h-12 rounded-md bg-lifepit-midnight px-6 text-sm font-black text-white shadow-luxury">
              検索
            </button>
          </form>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/dictionary/${entry.slug}`}
              className="rounded-md border border-white bg-white/88 p-5 shadow-panel transition hover:border-lifepit-blue/60 hover:shadow-luxury"
            >
              <p className="text-xs font-black text-lifepit-blue">{entry.category}</p>
              <h2 className="mt-3 text-xl font-black text-lifepit-midnight">{entry.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{entry.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-lifepit-mist px-2 py-1 text-xs font-bold text-lifepit-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
