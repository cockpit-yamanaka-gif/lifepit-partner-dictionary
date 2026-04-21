import type { DictionaryEntry } from "@/lib/types/dictionary";

const connectionCopyBlocks = [
  {
    title: "求職者への事前案内",
    note: "まず温度感を確認したい時",
    body: `おつかれ！
今すぐじゃなくても、将来的に転職とかキャリアのこと考えたりしてる？

実は自分が信頼してるエージェントがいて、市場価値とか年収レンジを客観的に整理してくれる人なんだよね。
いきなり転職って感じじゃなくて、「自分って今どのくらいの立ち位置なんだろ？」を知るくらいの感覚。

もし少しでも気になったら繋ぐけど、どう？`
  },
  {
    title: "紹介前の提案トーク",
    note: "LifePit担当者へつなぐ前に送る文面",
    body: `ここ最近、完全紹介制で転職支援を行っているCockPitという会社でマネージャーをされている山中さんは、多くの転職支援の方々とお会いした中で、唯一信頼できるコンサルタントです。

手厚いサポートやキャリアプランをフラットに相談できる方なので、〇〇さんのお力になること間違いないかと思います。
転職を勧められることもありませんし、キャリアの壁打ちや整理だけでも、かなり視界がクリアになると思います。

〇〇さんの状況に合うかどうかも含めて、まずは軽く話を聞いてみるくらいで全く問題ないと思いますので、ご連絡してお繋ぎしますね^^`
  },
  {
    title: "LINE連携接続文",
    note: "グループや個別LINEでそのまま接続する時",
    body: `@LifePit担当者
お世話になります。
私の友人である〇〇さんをお繋ぎさせてください。
現時点では詳細情報はまだ整理できていないため、まずはキャリアの方向性整理からお願いできれば幸いです。
どうぞよろしくお願いいたします。

@求職者様
〇〇さん、私が心から信頼している山中さんです。
無理に転職を勧めるタイプではなく、まずは今後のキャリアや市場価値を客観的に整理してくれる方です。
企業選定・書類添削・面接対策まで伴走してくださるので、安心してご相談ください。

まずは簡単なご挨拶も兼ねて、10〜15分ほどオンラインでお話できればと思います。
直近でご都合の良い日程を3つほど教えていただけますか？

・◯月◯日（◯）◯:◯◯〜
・◯月◯日（◯）◯:◯◯〜
・◯月◯日（◯）◯:◯◯〜`
  }
];

export const dictionaryEntries: DictionaryEntry[] = [
  {
    slug: "lifepit-service",
    title: "LifePit",
    category: "サービス理解",
    description: "何を支援できるサービスかを確認。",
    summary:
      "LifePitが提供できる価値、相談できるテーマ、募集人様との役割分担を整理します。",
    tags: ["サービス", "概要", "価値"],
    relatedSlugs: ["lifepit-next", "collaboration-flow"],
    resourceHrefs: ["/documents/lifepit-service/lifepit-service-overview.pdf"],
    sections: [
      {
        title: "まず伝えること",
        body: "LifePitは、保険提案だけでは拾いきれない相談機会を広げるためのパートナーサービスです。"
      },
      {
        title: "募集人様のメリット",
        body: "顧客との接点を増やし、紹介後の状況共有や次回提案につなげやすくします。"
      },
      {
        title: "見せ方",
        body: "最初はサービス概要を短く共有し、興味が出たタイミングで資料を案内します。"
      }
    ]
  },
  {
    slug: "lifepit-next",
    title: "LifePit Next",
    category: "サービス理解",
    description: "既存顧客への次の提案を確認。",
    summary:
      "紹介で終わらせず、顧客の状況に合わせて継続的な接点を作るための提案テーマです。",
    tags: ["Next", "既存顧客", "再提案"],
    relatedSlugs: ["lifepit-service", "lost-customer"],
    resourceHrefs: ["/documents/lifepit-next/lifepit-next-partner.pdf"],
    sections: [
      {
        title: "使う場面",
        body: "既存顧客、失注顧客、しばらく連絡が空いた顧客への次の接点づくりに使います。"
      },
      {
        title: "提案の方向性",
        body: "保険の話に戻す前に、顧客の近況やキャリア、採用、家族の相談などから接点を作ります。"
      },
      {
        title: "成果につなげるポイント",
        body: "顧客の温度感を共有し、LifePit側との連携後に次回フォローを決めます。"
      }
    ]
  },
  {
    slug: "social-media",
    title: "ソーシャルメディア案内",
    category: "提案トーク",
    description: "発信内容と案内方法を確認。",
    summary:
      "LifePitのSNSや発信内容を、顧客への案内や信頼形成に使いやすく整理します。",
    tags: ["SNS", "案内", "発信"],
    relatedSlugs: ["lifepit-news", "lifepit-service", "collaboration-flow"],
    sections: [
      {
        title: "役割",
        body: "SNSは、LifePitの雰囲気や考え方を顧客に見てもらうための入口です。"
      },
      {
        title: "案内方法",
        body: "資料を送る前に、SNSや投稿を見てもらうとサービス理解のハードルが下がります。"
      },
      {
        title: "今後追加するもの",
        body: "公式SNSリンク、投稿例、顧客に送る案内文をここに集約します。"
      }
    ],
    socialLinks: [
      {
        platform: "Instagram",
        label: "Instagram",
        handle: "@lifepit_official",
        href: "https://www.instagram.com/lifepit_official/"
      },
      {
        platform: "X",
        label: "X",
        handle: "@lifepit_x",
        href: "https://x.com/lifepit_x"
      }
    ]
  },
  {
    slug: "lifepit-news",
    title: "LifePit NEWS",
    category: "提案トーク",
    description: "毎月の活動報告を顧客案内に活用。",
    summary:
      "LifePitの実績、活動状況、SNS発信をまとめた月次ニュースを確認できます。",
    tags: ["NEWS", "月次資料", "案内"],
    relatedSlugs: ["social-media", "lifepit-service", "connection-message"],
    resourceHrefs: [
      "/documents/lifepit-news/lifepit-news-03.pdf",
      "/documents/lifepit-news/lifepit-news-02.pdf",
      "/documents/lifepit-news/lifepit-news-01.pdf",
      "/documents/lifepit-news/lifepit-news-12.pdf",
      "/documents/lifepit-news/lifepit-news-11.pdf"
    ],
    sections: [
      {
        title: "使い方",
        body: "顧客や募集人様にLifePitの動きを共有したい時に、最新号から案内します。"
      }
    ]
  },
  {
    slug: "connection-message",
    title: "LifePit 接続文",
    category: "運用フロー",
    description: "紹介時に使える文面をコピー。",
    summary:
      "顧客への事前案内、紹介前の一言、LINEでの接続文をすぐ使える形でまとめます。",
    tags: ["接続文", "コピー", "紹介"],
    relatedSlugs: ["collaboration-flow", "lifepit-service", "social-media"],
    copyBlocks: connectionCopyBlocks,
    sections: [
      {
        title: "使い方",
        body: "相手との関係性に合わせて、必要な文面をコピーして名前や日程だけ調整します。"
      }
    ]
  },
  {
    slug: "collaboration-flow",
    title: "連携方法",
    category: "運用フロー",
    description: "紹介から面談後までの流れを確認。",
    summary:
      "紹介、接続文、アポ報告、次回フォローまで、募集人様とLifePit側の動きをそろえます。",
    tags: ["紹介", "接続文", "アポ報告"],
    relatedSlugs: ["connection-message", "lifepit-service", "lifepit-next"],
    steps: [
      "顧客の相談内容と温度感を確認する",
      "接続文でLifePit担当者へつなぐ",
      "面談後に状況と次アクションを共有する",
      "必要に応じて次回フォローや再提案につなげる"
    ],
    sections: [
      {
        title: "基本の流れ",
        body: "紹介前、接続、面談後、フォローの4ステップで動くと連携がスムーズです。"
      },
      {
        title: "共有したい情報",
        body: "顧客の相談背景、期待値、温度感、急ぎ度、次に取るべきアクションを共有します。"
      },
      {
        title: "迷った時",
        body: "紹介してよいか迷う場合は、顧客に送る前にLifePit側へ一度確認します。"
      }
    ],
    copyBlocks: connectionCopyBlocks
  },
  {
    slug: "lost-customer",
    title: "失注顧客",
    category: "クライアント対応",
    description: "止まった顧客接点を再提案につなげます。",
    summary:
      "保険提案だけでは動かなかった顧客に、キャリアや採用など別の切り口で価値提供します。",
    tags: ["再提案", "既存顧客", "資産化"],
    relatedSlugs: ["lifepit-next", "collaboration-flow"],
    sections: [
      {
        title: "考え方",
        body: "失注は終わりではなく、別テーマで再び相談機会を作るきっかけになります。"
      },
      {
        title: "使う切り口",
        body: "キャリア、採用、家族、将来設計など、保険以外の相談から接点を戻します。"
      }
    ]
  }
];

export const featuredEntries = dictionaryEntries.slice(0, 3);

export function getDictionaryEntry(slug: string) {
  return dictionaryEntries.find((entry) => entry.slug === slug);
}
