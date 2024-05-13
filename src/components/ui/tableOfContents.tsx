import { useEffect } from "react";
import tocbot from "tocbot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { cn } from "~/libs/utils";

function TocList() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc", // 目次を追加する class 名
      contentSelector: ".article-body", // 目次を取得するコンテンツの class 名
      headingSelector: "h2, h3, h4", // 目次として取得する見出しタグ
      headingsOffset: 70,
      scrollSmoothOffset: -70,
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return <nav className="toc" />;
}

export default function Toc(props: { className?: string }) {
  return (
    <>
      <Accordion className={cn(props.className)} type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>目次</AccordionTrigger>
          <AccordionContent>
            <TocList />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
