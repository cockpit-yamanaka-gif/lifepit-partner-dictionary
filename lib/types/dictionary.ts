export type DictionaryCategory =
  | "サービス理解"
  | "提案トーク"
  | "クライアント対応"
  | "アポ後対応"
  | "運用フロー";

export type DictionaryEntry = {
  slug: string;
  title: string;
  category: DictionaryCategory;
  description: string;
  summary: string;
  tags: string[];
  relatedSlugs: string[];
  sections: {
    title: string;
    body: string;
  }[];
  steps?: string[];
  copyBlocks?: {
    title: string;
    body: string;
    note?: string;
  }[];
  socialLinks?: {
    platform: "Instagram" | "X";
    label: string;
    handle: string;
    href: string;
  }[];
  resourceHrefs?: string[];
};
