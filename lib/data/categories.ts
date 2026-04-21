import type { DictionaryCategory } from "@/lib/types/dictionary";

export const categories: {
  slug: string;
  title: DictionaryCategory;
  description: string;
}[] = [
  {
    slug: "service",
    title: "サービス理解",
    description: "LifePitを確認。"
  },
  {
    slug: "talk",
    title: "提案トーク",
    description: "SNS案内や伝え方を確認。"
  },
  {
    slug: "operation",
    title: "運用フロー",
    description: "紹介から報告までの連携方法。"
  }
];
