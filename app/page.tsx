import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/data/categories";
import { dictionaryEntries } from "@/lib/data/dictionary";
import { mainGuideSlugs } from "@/lib/data/main-guides";
import { useCases } from "@/lib/data/use-cases";

const mainGuideEntries = mainGuideSlugs
  .map((slug) => dictionaryEntries.find((entry) => entry.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-lifepit-soft text-lifepit-ink">
      <header className="border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-black">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-blue-100 bg-white shadow-sm">
              <Image
                src="/images/lifepit-logo.png"
                alt="LifePit"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
            </span>
            <span className="text-lifepit-midnight">LifePit Partner Dictionary</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="主要ページ">
            <Link
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-600 hover:bg-white hover:text-lifepit-midnight hover:shadow-sm"
              href="/dictionary"
            >
              辞典
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-600 hover:bg-white hover:text-lifepit-midnight hover:shadow-sm"
              href="/use-cases"
            >
              活用シーン
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-600 hover:bg-white hover:text-lifepit-midnight hover:shadow-sm"
              href="/resources"
            >
              資料
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-lifepit-midnight sm:text-5xl">
            LifePit Partner Dictionary
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            SNS案内、サービス概要、LifePit Next、紹介後の流れをまとめています。
          </p>

          <form action="/dictionary" className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="keyword">
              キーワードを検索
            </label>
            <input
              id="keyword"
              name="q"
              type="search"
              placeholder="例：SNS、LifePit Next、連携方法"
              className="min-h-12 flex-1 rounded-md border border-white bg-white/90 px-4 text-base shadow-panel outline-none transition placeholder:text-slate-400 focus:border-lifepit-blue focus:ring-4 focus:ring-lifepit-sky"
            />
            <button
              type="submit"
              className="min-h-12 rounded-md bg-lifepit-midnight px-6 text-sm font-black text-white shadow-luxury transition hover:bg-lifepit-deep"
            >
              検索する
            </button>
          </form>
        </div>
      </section>

      <section className="border-y border-white/70 bg-white/72 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black text-lifepit-blue">Main Guide</p>
              <h2 className="mt-2 text-2xl font-black text-lifepit-midnight">まず見る案内</h2>
            </div>
            <Link href="/dictionary" className="text-sm font-bold text-lifepit-midnight hover:underline">
              一覧を見る
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {mainGuideEntries.map((keyword) => (
              <Link
                key={keyword!.slug}
                href={`/dictionary/${keyword!.slug}`}
                className="group rounded-md border border-white bg-gradient-to-b from-white to-lifepit-ice p-5 shadow-panel transition hover:-translate-y-1 hover:border-lifepit-blue/60 hover:shadow-luxury"
              >
                <p className="text-xs font-black text-lifepit-blue">{keyword!.category}</p>
                <h3 className="mt-3 text-xl font-black text-lifepit-midnight">{keyword!.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{keyword!.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {keyword!.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-lifepit-mist px-2 py-1 text-xs font-bold text-lifepit-navy ring-1 ring-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
