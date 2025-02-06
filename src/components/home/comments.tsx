import { useTheme } from "next-themes";
import { DiscussionEmbed } from "disqus-react";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation("home");
  return (
    <div className="disqus-container mt-40 rounded-lg">
      <DiscussionEmbed
        key={`${theme}_${i18n.language}`}
        shortname="gaohaoyang-github-io-pte-crx-page"
        config={{
          url: "https://gaohaoyang.github.io/pte-crx-page",
          identifier: "gaohaoyang.github.io_pte-crx-page",
          title:
            "PTE Sub-Scores Breakdown | Analyze Your PTE Sub-Scores Online with PTE Sub-Scores Breakdown Chrome Extension | 分析 PTE Core 小分的 Chrome 插件",
          language: i18n.language,
        }}
      />
    </div>
  );
};

export default Comments;
