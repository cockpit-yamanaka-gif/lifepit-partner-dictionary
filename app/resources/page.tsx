import Link from "next/link";

import { resources } from "@/lib/data/resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-lifepit-soft px-5 py-10 text-lifepit-ink sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-lifepit-midnight hover:underline">
          トップへ戻る
        </Link>
        <header className="mt-6 rounded-md border border-white bg-gradient-to-br from-white via-lifepit-ice to-lifepit-mist p-6 shadow-luxury">
          <p className="text-sm font-black text-lifepit-blue">Resources</p>
          <h1 className="mt-2 text-3xl font-black text-lifepit-midnight">資料</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            フォルダに格納された資料をサイトから開けるようにしています。
          </p>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white bg-white/88 p-5 shadow-panel hover:border-lifepit-blue/60"
            >
              <p className="text-xs font-black text-lifepit-blue">{resource.category}</p>
              <h2 className="mt-3 text-xl font-black text-lifepit-midnight">{resource.title}</h2>
              <p className="mt-3 text-xs leading-6 text-slate-500">{resource.sourcePath}</p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
