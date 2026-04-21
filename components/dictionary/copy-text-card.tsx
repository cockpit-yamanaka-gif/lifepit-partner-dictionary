"use client";

import { useState } from "react";

type CopyTextCardProps = {
  title: string;
  body: string;
  note?: string;
};

export function CopyTextCard({ title, body, note }: CopyTextCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="rounded-md border border-lifepit-blue/20 bg-gradient-to-br from-white to-lifepit-mist p-5 shadow-panel">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-lifepit-blue">
            Copy Script
          </p>
          <h3 className="mt-2 text-lg font-black text-lifepit-midnight">{title}</h3>
          {note && <p className="mt-2 text-xs font-bold text-slate-500">{note}</p>}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-md bg-lifepit-midnight px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-lifepit-blue"
        >
          {copied ? "コピー済み" : "コピー"}
        </button>
      </div>
      <p className="mt-4 whitespace-pre-line rounded-md border border-blue-100 bg-white/80 p-4 text-sm font-bold leading-7 text-slate-700">
        {body}
      </p>
    </div>
  );
}
