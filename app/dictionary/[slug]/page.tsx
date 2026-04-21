import Link from "next/link";
import { notFound } from "next/navigation";

import { CopyTextCard } from "@/components/dictionary/copy-text-card";
import { SocialLinkCard } from "@/components/dictionary/social-link-card";
import { dictionaryEntries, getDictionaryEntry } from "@/lib/data/dictionary";
import { resources } from "@/lib/data/resources";

export function generateStaticParams() {
  return dictionaryEntries.map((entry) => ({ slug: entry.slug }));
}

export default async function DictionaryDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getDictionaryEntry(slug);

  if (!entry) {
    notFound();
  }

  const relatedEntries = entry.relatedSlugs.flatMap((relatedSlug) => {
    const relatedEntry = getDictionaryEntry(relatedSlug);
    return relatedEntry ? [relatedEntry] : [];
  });
  const linkedResources = resources.filter((resource) =>
    entry.resourceHrefs?.includes(resource.href)
  );

  return (
    <main className="min-h-screen bg-lifepit-soft px-5 py-10 text-lifepit-ink sm:px-8">
      <article className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-lifepit-midnight hover:underline">
          トップへ戻る
        </Link>

        <header className="mt-6 rounded-md border border-white bg-gradient-to-br from-white via-lifepit-ice to-lifepit-mist p-6 shadow-luxury">
          <p className="text-sm font-black text-lifepit-blue">{entry.category}</p>
          <h1 className="mt-3 text-4xl font-black text-lifepit-midnight">{entry.title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">{entry.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-lifepit-mist px-2 py-1 text-xs font-bold text-lifepit-navy ring-1 ring-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {linkedResources.length > 0 && (
          <section className="mt-6 overflow-hidden rounded-md border border-lifepit-blue/20 bg-white shadow-luxury">
            <div className="bg-gradient-to-r from-lifepit-midnight to-lifepit-deep px-5 py-4 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-lifepit-sky">
                Important Resources
              </p>
              <h2 className="mt-1 text-2xl font-black">関連資料</h2>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              {linkedResources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-28 flex-col justify-between rounded-md border border-lifepit-blue/20 bg-gradient-to-br from-white to-lifepit-mist p-5 shadow-panel transition hover:-translate-y-1 hover:border-lifepit-blue hover:shadow-luxury"
                >
                  <span className="text-lg font-black text-lifepit-midnight">
                    {resource.title}
                  </span>
                  <span className="mt-4 inline-flex w-fit rounded-md bg-lifepit-blue px-4 py-2 text-xs font-black text-white transition group-hover:bg-lifepit-midnight">
                    資料を開く
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {entry.steps && (
          <section className="mt-6 rounded-md border border-white bg-white/88 p-5 shadow-panel">
            <h2 className="text-xl font-black text-lifepit-midnight">連携ステップ</h2>
            <ol className="mt-4 grid gap-3">
              {entry.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-md bg-lifepit-pearl p-4 ring-1 ring-blue-100/80">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-lifepit-midnight text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm font-bold leading-6">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {entry.socialLinks && (
          <section className="mt-6 rounded-md border border-white bg-white/88 p-5 shadow-panel">
            <h2 className="text-xl font-black text-lifepit-midnight">公式SNS</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {entry.socialLinks.map((link) => (
                <SocialLinkCard key={link.platform} link={link} />
              ))}
            </div>
          </section>
        )}

        {entry.copyBlocks && (
          <section className="mt-6 rounded-md border border-lifepit-blue/20 bg-white/92 p-5 shadow-luxury">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-lifepit-blue">
                  Ready to Send
                </p>
                <h2 className="mt-1 text-2xl font-black text-lifepit-midnight">
                  コピーできる接続文
                </h2>
              </div>
              <p className="text-sm font-bold text-slate-500">
                名前と日程だけ調整して使えます
              </p>
            </div>
            <div className="mt-5 grid gap-4">
              {entry.copyBlocks.map((block) => (
                <CopyTextCard
                  key={block.title}
                  title={block.title}
                  body={block.body}
                  note={block.note}
                />
              ))}
            </div>
          </section>
        )}

        {relatedEntries.length > 0 && (
          <section className="mt-6 rounded-md border border-white bg-white/88 p-5 shadow-panel">
            <h2 className="text-xl font-black text-lifepit-midnight">関連案内</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedEntries.map((related) => (
                <Link
                  key={related.slug}
                  href={`/dictionary/${related.slug}`}
                  className="rounded-md border border-blue-100 bg-lifepit-mist px-4 py-3 text-sm font-bold text-lifepit-midnight hover:border-lifepit-blue"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
