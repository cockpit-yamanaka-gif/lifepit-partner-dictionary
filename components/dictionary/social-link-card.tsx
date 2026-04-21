import type { DictionaryEntry } from "@/lib/types/dictionary";

type SocialLink = NonNullable<DictionaryEntry["socialLinks"]>[number];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <defs>
        <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#instagramGradient)" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M16 14h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z"
      />
      <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="4" />
      <circle cx="32.5" cy="17.5" r="2" fill="#fff" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <rect width="48" height="48" rx="13" fill="#000" />
      <path
        fill="#fff"
        d="M27.2 21.7 38.1 9h-2.6l-9.4 11L18.5 9H9.8l11.5 16.7L9.8 39h2.6l10.1-11.8L30.6 39h8.7L27.2 21.7Zm-3.6 4.2-1.2-1.7-9.2-13.3h4.1l7.4 10.6 1.2 1.7 9.7 13.9h-4.1l-7.9-11.2Z"
      />
    </svg>
  );
}

export function SocialLinkCard({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-md border border-white bg-white/88 p-5 shadow-panel transition hover:-translate-y-1 hover:border-lifepit-blue/60 hover:shadow-luxury"
    >
      <div className="flex items-center gap-4">
        {link.platform === "Instagram" ? <InstagramIcon /> : <XIcon />}
        <div>
          <p className="text-xs font-black text-lifepit-blue">{link.label}</p>
          <p className="mt-1 text-lg font-black text-lifepit-midnight">{link.handle}</p>
        </div>
      </div>
      <span className="rounded-md bg-lifepit-mist px-3 py-2 text-xs font-black text-lifepit-navy transition group-hover:bg-lifepit-blue group-hover:text-white">
        開く
      </span>
    </a>
  );
}
