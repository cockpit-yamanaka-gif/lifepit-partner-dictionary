import Link from "next/link";
import { notFound } from "next/navigation";

import { categories } from "@/lib/data/categories";
import { dictionaryEntries } from "@/lib/data/dictionary";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const entries = dictionaryEntries.filter((entry) => entry.category === category.title);

  return (
    <main className="min-h-screen bg-lifepit-soft px-5 py-10 text-lifepit-ink sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-lifepit-midnight hover:underline">
          トップへ戻る
        </Link>
        <header className="mt-6 rounded-md border border-white bg-gradient-to-br from-white via-lifepit-ice to-lifepit-mist p-6 shadow-luxury">
          <p className="text-sm font-black text-lifepit-blue">Category</p>
          <h1 className="mt-2 text-3xl font-black text-lifepit-midnight">{category.title}</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/dictionary/${entry.slug}`}
              className="rounded-md border border-white bg-white/88 p-5 shadow-panel hover:border-lifepit-blue/60"
            >
              <h2 className="text-xl font-black text-lifepit-midnight">{entry.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{entry.description}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
