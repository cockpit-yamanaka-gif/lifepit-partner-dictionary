import Link from "next/link";

import { useCases } from "@/lib/data/use-cases";

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-lifepit-soft px-5 py-10 text-lifepit-ink sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-lifepit-midnight hover:underline">
          トップへ戻る
        </Link>
        <header className="mt-6 rounded-md border border-white bg-gradient-to-br from-white via-lifepit-ice to-lifepit-mist p-6 shadow-luxury">
          <p className="text-sm font-black text-lifepit-blue">Quick Start</p>
          <h1 className="mt-2 text-3xl font-black text-lifepit-midnight">すぐ確認する</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            募集人様が使う場面ごとに、最初に見るページをまとめています。
          </p>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <a
              key={useCase.href}
              id={useCase.href.split("#")[1]}
              href={useCase.href}
              className="rounded-md border border-white bg-white/88 p-5 shadow-panel"
            >
              <h2 className="text-xl font-black text-lifepit-midnight">{useCase.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{useCase.description}</p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
